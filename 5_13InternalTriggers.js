
/***************************** Q *****************************
When we're viewing photos, there's a link that comes up to 'Hide Tour'. Within the plugin, watch for 
click on this link, .hide-tour. When it is clicked, call fadeOut() on the tour and remove all events 
namespaces to photofy.
 ***************************** Q *****************************/

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    settings.tour.on('click.photofy', '.see-photos', show);
    settings.tour.on('show.photofy', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
});



/***************************** A 5.13 *****************************
When the 'Hide Tour' link is clicked, be sure to call `preventDefault` on the click event, 
stopping the page from jumping to the top
***************************** A 5.13 *****************************/

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    var remove = function () {
      settings.tour.hide().off('.photofy').fadeOut();
    };
    settings.tour.on('click.photofy', '.see-photos', show);
    settings.tour.on('show.photofy', show); 
    settings.tour.on('click.photofy', '.hide-tour', remove);  
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
  
  $('.hide-tour').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('rm.photofy');
  });
});


/***************************** A 5.13 *****************************
AC
***************************** A 5.13 *****************************/

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    var remove = function (e) {
      e.preventDefault();
      settings.tour.hide().off('.photofy').fadeOut();
    };
    settings.tour.on('click.photofy', '.see-photos', show);
    settings.tour.on('show.photofy', show); 
    settings.tour.on('click.photofy', '.hide-tour', remove);  
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
  
  $('.hide-tour').on('click', function(event) {
    $('.tour').trigger('click.photofy');
  });
});
