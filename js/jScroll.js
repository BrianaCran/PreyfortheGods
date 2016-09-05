(function($) {

    // Public: jScroll Plugin
    $.fn.jScroll = function(options) {

        var opts = $.extend({}, $.fn.jScroll.defaults, options);

        return this.each(function() {
			var $element = $(this);
			var $window = $(window);
			var locator = new location($element);

			$window.scroll(function() {
				$element
					.stop()
					.animate(locator.getMargin($window), opts.speed);
			});
        });

		// Private
		function location($element)
		{
			this.min = $element.offset().top;
			this.originalMargin = parseInt($element.css("margin-top"), -50) || 0;

			this.getMargin = function ($window)
			{
				var max = $element.parent().height() - $element.outerHeight();
				var margin = this.originalMargin;

				if ($window.scrollTop() >= this.min)
					margin = margin + opts.top + $window.scrollTop() - this.min;

				if (margin > max)
					margin = max;

				return ({"marginTop" : margin + 'px'});
			}
		}

    };

    // Public: Default values
    $.fn.jScroll.defaults = {
        speed	:	"slow",
		top		:	 0
    };

})(jQuery);
$().ready(function() {
		var $move = $("#move");

		$(window).scroll(function(){
			$move
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 5) + "px"}, "slow" );
		});
	});
