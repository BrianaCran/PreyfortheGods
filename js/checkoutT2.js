$(document).ready(function(){
     $('.introPhoto').hide();
     $('.buyingA').show();
     $('#title').html("Backer Plus");
     $('.nextI').hide();
     $('.p1').show();
     $('#price').html(' $25');
     $('.items').html('<li>Digital Copy of the Game for PC</li>'+'<li>Desktop Backgrounds</li>'+'<li>Elite Grappling Hook</li>');
     $('.execute').click(function(){
       var price = 25;
       var tip = document.getElementById('newValue').value;
       var sum = parseInt(tip, 10) + price;
       document.getElementById('newT').innerHTML = "$" + sum;
     });
     $('.items').hide();
     $('.itemsB').hide();
});
