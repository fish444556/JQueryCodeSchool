
/***************************** Q *****************************
Ok, now that we can see what our data looks like, lets go ahead and put the data into our html. We have HTML 
already created for each deal, so we can use the index within the each loop to locate the deal DOM node to 
update. Update the name and the price of each deal.
 ***************************** Q *****************************/

$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        // Your code goes here
      });
    }
  });
});




/***************************** A *****************************/


$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        // Your code goes here
        var val = $('.deal-' + index);
        val.find('h3').html(dealItem.name);
        val.find('p').html(dealItem.price);
      });
    }
  });
});

/***************************** 4.5 A getJSON *****************************/

$('button').on('click', function() {
  $.getJSON('/cities/deals', function (result) {
    var val = $('.deal-' + index);
    val.find('h3').html(dealItem.name);
    val.find('p').html(dealItem.price);
  })
});
