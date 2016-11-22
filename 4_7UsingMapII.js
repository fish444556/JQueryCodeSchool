
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


$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      // Your code goes here
      var listItem = $('<li></li>');
      $('<h3>' + flightItem.flightNumber + '</h3>').appendTo(listItem);
      $('<p>' + flightItem.time + '</p>').appendTo(listItem);
      return listItem;
    });
    $('.flight-times').html(flightElements);
  });
});

