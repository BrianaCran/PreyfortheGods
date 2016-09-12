$(document).ready(function(){
     $('.buying').hide();
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
