
$(document).ready(function(){

	var shows,regions,show_regions;
	
	var showSelect = $('select[name="showSelect"]');
	var regionSelect = $('select[name="regionSelect"]');
	
	function filterArray(array, value){
		var arr = jQuery.grep(array, function(el, i){
			return el.code == value;
		});
		return arr;
	}
	
	function validData(){
		var showSelectVal = showSelect.val();
		var filteredArray = filterArray(shows,showSelectVal);
		if(!filteredArray || filteredArray.length==0)
			return false;
		var regionSelectVal = regionSelect.val();
		filteredArray = filterArray(regions,regionSelectVal);
		if(!filteredArray || filteredArray.length==0)
			return false;
		
		return true;
	};
	
	$("#showForm").on('submit',function(e){
		if(!validData())
			return false;
	});
	
	var selectFromLocalStorage = function(){
		var lastSelectedShow = $.jStorage.get('last-showSelect');
		var lastSelectedRegion = $.jStorage.get('last-regionSelect');
		if(lastSelectedShow)
			showSelect.val(lastSelectedShow).trigger('change');
		if(lastSelectedRegion)
			regionSelect.val(lastSelectedRegion).prop("disabled",false).trigger('change');
	};

	showSelect.on('change',function(e){
		var val = $(this).val();

		if(val==""){
			regionSelect.val("").prop("disabled",true).trigger('change');
			return;
		}
		regionSelect.prop("disabled",false);
		
		var filteredArray = filterArray(shows,val);
		var show = filteredArray[0];
		
		var matchingRegions = jQuery.grep(show_regions, function(showRegion, i){
			return showRegion.show_id == show.id;
		});
		
		if(matchingRegions && matchingRegions.length>0){
			regionSelect.children().not(":first").remove();
			var applicableRegions = $.map(matchingRegions, function(val,key) {
			
				var ar =  jQuery.grep(regions, function(el, i){
					return el.id == val.region_id;
				})
				return (ar && ar.length==0)?null:ar[0];
			});
			$.each(applicableRegions, function(i,region){
				var opt = $('<option value="'+region.code+'">'+region.label_i18n[0]+'</option>').appendTo(regionSelect);
			});
			regionSelect.val("").trigger('change');
		}
	});
	
	$("#showForm").on('change','select',function(e){
		var name = $(this).attr("name");
		var val = $(this).val();
		$.jStorage.set('last-' + name,val)
	});
	
	var populateSelectOptions = function(data){
		shows = data.shows;
		regions = data.regions;
		show_regions = data.show_regions;
		$.each(shows, function(i,show){
			var opt = $('<option value="'+show.code+'">'+show.label_i18n[0]+'</option>').appendTo(showSelect);
		});
		
		$.each(regions, function(i,region){
			var opt = $('<option value="'+region.code+'">'+region.label_i18n[0]+'</option>').appendTo(regionSelect);
		});

		selectFromLocalStorage();
		
		showSelect.children().first().text("Select show");
		regionSelect.children().first().text("Select region");
		
		showSelect.prop('disabled',false);
	};

	var ajaxOpts = {
		url: "https://test-live-webapp.s3.amazonaws.com/json.js"
		,dataType: 'jsonp'
		,jsonp: 'callback'
		,jsonpCallback: 'results'
		,success: populateSelectOptions
		,error: function(e) {
			console.log(e);
		}
	};
	$.ajax(ajaxOpts);
});
