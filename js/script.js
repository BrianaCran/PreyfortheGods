$(document).ready(function(){
  $('.mobileN').click(function() {
      if ($('.mobileN').hasClass("clicked-once")) {
  			$('.drop').hide();
  			$('.mobileN').removeClass("clicked-once");
      }
      else {
  			$('.mobileN').addClass("clicked-once");
        $('.drop').show();
      }
  });
});
