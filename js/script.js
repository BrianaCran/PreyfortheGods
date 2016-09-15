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
$(document).ready(function(){
  $('.tiers').click(function() {
      if ($('.tiers').hasClass("clicked-once")) {
  			$('.tierExplanation').hide();
  			$('.tiers').removeClass("clicked-once");
      }
      else {
  			$('.tiers').addClass("clicked-once");
        $('.tierExplanation').show();
      }
  });
});
