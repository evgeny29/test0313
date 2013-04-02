
# Candidate Test


## Task Description
Write a responsive HTML landing page that displays a logo, two drop-down selection boxes and a submit button.

The drop-down selection boxes will be displayed vertically below the logo. The logo and drop-downs will be vertically centered in the page as well as horizontally (centered). The submit button will also be displayed underneath.

The landing page shall be responsive for mobile-phone, tablet and desktop. The logo can be resized for small displays if needed.

The drop-down boxes shall contain the options available from the JSONP request to [this GET url](https://test-live-webapp.s3.amazonaws.com/json.js). JSONP response will contain:
1. Show list named 'shows'
2. Region list named 'regions'
3. Regions per show list named 'show_regions' (see bonus work)

Hint: The JSONP response will show you the callback function expected but to help you we provided it to you, the callback function is called 'results'.

The show / region are not dependent of each other so all shows and regions can be selected independently of one another.

The submit button shall validate the entries and log the show & region selected.

Please fork the git repository to progress and commit your work. Then push back your changes and request a Pull Request or give provide us with your fork(-ed) repo.
We should be able to checkout the git repo and get the webapp running after configuring a web server top point to that resource.

*Bonus work 1:* Make the show and region dependent of one another by applying the 'show_regions' rules, so that only a subset of the regions are available for each show. This piece is optional but bonus point will be added for its completion.

*Bonus work 2:* Save the region & show selected values to Local Storage so that a refresh of the landing page displays the last user selections (form is pre-filled). This piece is optional but bonus point will be added for its completion.



## Provided resources:
* Logo: logo.png
* JSONP results: https://test-live-webapp.s3.amazonaws.com/json.js


## Notation
The candidate will not be noted for his test but rather assessed as being a suitable candidate or not.
We will evaluate the candidate's experiences and skills and the quality of the work produced.


## Time for completion
The candidate can take as much time as needed to complete the test however the turnaround time will be taken in consideration. Submission must be received by Friday 1pm however. 

