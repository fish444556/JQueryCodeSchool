
/***************************** Q *****************************
Now you need to create the array of html elements. Create an array of li elements, each with the 
flightNumber and the time from the ajax result. Insert the resulting array into the .flight-times 
unordered list element.
 ***************************** Q *****************************/

$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      // Your code goes here
    });
  });
});




/***************************** A *****************************/


$.fn.photofy = function() {
  this.each(function() {

  });
}

$(document).ready(function() {
  $('.tour').photofy();
});


/***************************** A 5.10 err1 *****************************
Remember, within the `.each` loop, you'll need to change `this` from a DOM node to a jQuery object by 
using `$(this)`
*/

$.fn.photofy = function() {
  this.each(function() {
    var val = this;
    //console.log(this);
    val.on('click.photofy', '.see-photos', function() {
      $(this).addClass('is-showing-photofy');
    });
  });
}

$(document).ready(function() {
  $('.tour').photofy();
});
