$(document).ready(function(){

     $('.buying').hide();
     $('.buyingB').show();
     $('#title').html("Backer Plus");
     $('.nextI').hide();
     $('.p1').show();
     $('#price').html(' $25');
     $('.items').html('<li>Digital Copy of the Game for PC</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>');

});

$(document).ready(function(){
  $('.TB').click(function(){
     $('.buying').hide();
     $('.buyingB').show();
     $('#title').html("Backer Plus");
     $('.nextI').hide();
     $('.p1').show();
     $('#price').html(' $25');
     $('.items').html('<li>Digital Copy of the Game for PC</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>');
   });
});
$(document).ready(function(){
   $('.TC').click(function(){
     $('.buying').hide();
     $('.buyingC').show();
     $('#title').html("Backer Deluxe");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p2').show();
     $('#price').html(' $35');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>'+'<li>Name listed under Backer in Credits</li>');
     $('.itemsB').hide();
   });
});
$(document).ready(function(){
   $('.TD').click(function(){
     $('.buying').hide();
     $('.buyingD').show();
     $('#title').html("Legion Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p3').show();
     $('#price').html(' $50');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>');
     $('.itemsB').html('<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');
   });
});
$(document).ready(function(){
   $('.TE').click(function(){
     $('.buying').hide();
     $('.buyingE').show();
     $('#title').html("Explorer Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p4').show();
     $('#price').html(' $75');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite In Game Pouch</li>'+'<li>Elite Avatar Skin</li>');
     $('.itemsB').html('<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');
   });
});
$(document).ready(function(){
   $('.TF').click(function(){
     $('.buying').hide();
     $('.buyingF').show();
     $('#title').html("Wolf Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p5').show();
     $('#price').html(' $100');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite Wolf Skin</li>'+ '<li>Avatar Wolf "Outfit"</li>'+ '<li>Elite In Game Pouch</li>');
     $('.itemsB').html('<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');
   });
});
$(document).ready(function(){
   $('.TG').click(function(){
     $('.buying').hide();
     $('.buyingG').show();
     $('#title').html("Digital Only Edition");
     $('.additionalI').hide();
     $('.nextI').hide();
     $('.p6').show();
     $('#price').html(' $150');
     $('.items').html('<li>Digital Copy of the Game for PC or Console</li>'+'<li>Raven Outfit</li>'+'<li>Raven Pet</li>'+'<li>Overlord Outfit</li>'+'<li>Overlord Pet</li>'+'<li>Beta Access</li>'+'<li>Digital Map of the Game</li>'+ '<li>Elite Wolf Skin</li>');
     $('.itemsB').html('<li>Avatar Wolf "Outfit"</li>'+ '<li>Elite In Game Pouch</li>'+'<li>Elite Avatar Skin</li>'+'<li>Original Soundtrack Digital Download</li>'+'<li>Digital Art Book</li>'+'<li>Desktop Backgrounds</li>' + '<li>Elite Grappling Hook</li>'+'<li>Name listed under Elite in Credits</li>');
   });
});

$(document).ready(function(){
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
  $('.included').click(function() {
      if ($('.included').hasClass("clicked-once")) {
  			$('.items').hide();
        $('.itemsB').hide();
  			$('.included').removeClass("clicked-once");
      }
      else {
  			$('.included').addClass("clicked-once");
  			$('.items').show();
        $('.itemsB').show();
      }
  });
});


$(document).ready(function(){
  $('.tip .button').click(function() {
      $('.tip .button').hide();
      $('.generous').show()
      $('.moreRight').show();

      });
});