
/***************************** Q *****************************
For each tour that we are using our "photofy" plugin on, we'll want to do a few things.

For starters create an event handler using on, that targets the .see-photos link within each .tour. When 
this is clicked, run a function that will add a class of is-showing-photofy to the tour. You'll probably 
want to save a reference to this outside of your event handler, and use that in the click event handler.
 ***************************** Q *****************************/

$.fn.photofy = function() {
  this.each(function() {
    console.log(this);
  });
}

$(document).ready(function() {
  $('.tour').photofy();
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
