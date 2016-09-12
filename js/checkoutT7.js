$(document).ready(function(){
     $('.introphoto').hide();
     $('.buyingF').show();
     $('#title').html("Digital Only Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p6').show();
     $('#price').html(' $150');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Raven Outfit</li>'+'<li>Raven Pet</li>'+'<li>Overlord Outfit</li>'+'<li>Overlord Pet</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite Wolf Skin</li>');
     $('.itemsB').html('<li>Avatar Wolf "Outfit"</li>'+ '<li>Elite In Game Pouch</li>'+'<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');

   $('.execute').click(function(){
     var price = 150;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
   $('.items').hide();
   $('.itemsB').hide();
});
