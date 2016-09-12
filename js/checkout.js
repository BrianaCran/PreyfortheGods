
$(document).ready(function(){
  $('.TA').click(function(){
     $('.introphoto').hide();
     $('.buyingA').show();
     $('#title').html("Backer Plus");
     $('.nextI').hide();
     $('.p1').show();
     $('#price').html(' $25');
     $('.items').html('<li>Digital Copy of the Game for PC</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>');
     $('.itemsB').html(" ");
   $('.execute').click(function(){
     var price = 25;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
   $('.items').hide();
   $('.itemsB').hide();
   });
});
$(document).ready(function(){
   $('.TB').click(function(){
     $('.introphoto').hide();
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
});
$(document).ready(function(){
   $('.TC').click(function(){
     $('.introphoto').hide();
     $('.buyingC').show();
     $('#title').html("Legion Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p3').show();
     $('#price').html(' $50');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>');
     $('.itemsB').html('<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');

   $('.execute').click(function(){
     var price = 50;
     var tip = document.getElementById('newValue').value;
     var sum = parseInt(tip, 10) + price;
     document.getElementById('newT').innerHTML = "$" + sum;
   });
   $('.items').hide();
   $('.itemsB').hide();
   });
});
$(document).ready(function(){
   $('.TD').click(function(){
     $('.introphoto').hide();
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
});
$(document).ready(function(){
   $('.TE').click(function(){
     $('.introphoto').hide();
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
   $('.items').hide();
   $('.itemsB').hide();
   });
});
$(document).ready(function(){
   $('.TF').click(function(){
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
});

$(document).ready(function(details){
  $('.options').click(function() {
      if ($('.options').hasClass("clicked-once")) {
  			$('.option2').hide();
        $('.visible').show();
  			$('.options').removeClass("clicked-once");
      }
      else {
  			$('.options').addClass("clicked-once");
  			$('.option2').show();
        $('.visible').hide();
      }
  });
});

$(document).ready(function(){
  $('.included').click(function(){
  			$('.items').toggle();
        $('.itemsB').toggle();
  });
});


$(document).ready(function(tip){
  $('.tip .button').click(function() {
      $('.tip .button').hide();
      $('.generous').show()
      $('.moreRight').show();
      $('.execute').show();
      });
});
