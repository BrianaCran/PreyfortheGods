$(document).ready(function(){
     $('.introPhoto').hide();
     $('.buyingD').show();
     $('#title').html("Explorer Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p4').show();
     $('#price').html(' $75');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite In Game Pouch</li>'+'<li>Elite Avatar Skin</li>');
     $('.itemsB').html('<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');

   $('.execute').click(function(){
     var price = 75;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
   $('.items').hide();
   $('.itemsB').hide();
});
