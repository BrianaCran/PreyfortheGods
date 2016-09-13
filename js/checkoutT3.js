$(document).ready(function(){
     $('.introPhoto').hide();
     $('.buyingB').show();
     $('#title').html("Backer Deluxe");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p2').show();
     $('#price').html(' $35');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>'+'<li>Name listed under Backer in Credits</li>');
     $('.itemsB').hide();

   $('.execute').click(function(){
     var price = 35;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
   $('.items').hide();
   $('.itemsB').hide();

});
