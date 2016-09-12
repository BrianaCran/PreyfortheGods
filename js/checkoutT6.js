$(document).ready(function(){
     $('.buying').hide();
     $('.buyingE').show();
     $('#title').html("Wolf Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p5').show();
     $('#price').html(' $100');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite Wolf Skin</li>'+ '<li>Avatar Wolf "Outfit"</li>'+ '<li>Elite In Game Pouch</li>');
     $('.itemsB').html('<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');

   $('.execute').click(function(){
     var price = 100;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
});
