
/***************************** Q *****************************
For each tour that we are using our "photofy" plugin on, we'll want to do a few things.

For starters create an event handler using on, that targets the .see-photos link within each .tour. When 
this is clicked, run a function that will add a class of is-showing-photofy to the tour. You'll probably 
want to save a reference to this outside of your event handler, and use that in the click event handler.
 ***************************** Q *****************************/

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
       e.preventDefault();
       settings.tour
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
     }
     
     settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
});




/***************************** A 5.11 *****************************
***************************** A 5.11 *****************************/

$.fn.photofy = function(options) {
  this.each(function() {
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    var show = function(e) {
       e.preventDefault();
       settings.tour
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
     }
     
     settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
});

$(document).ready(function() {
  $('.tour').photofy();
});

