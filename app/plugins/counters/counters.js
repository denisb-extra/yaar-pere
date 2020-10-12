(function ( $ ) {
 


$.fn.counters = function() {
	var mainElement = this;

    var scrollHandlerCounters = function(){
		  var oTop = $(mainElement).offset().top - window.innerHeight;
		  if ($(window).scrollTop() > oTop) {
			$(mainElement).find('.counter-value').each(function() {
			  var $this = $(this),
				countTo = $this.attr('data-count');
			  $({
				countNum: $this.text()
			  }).animate({
				  countNum: countTo
				},

				{
				  duration: 2000,
				  easing: 'swing',
				  step: function() {
					$this.text(numberWithCommas(Math.floor(this.countNum)));
				  },
				  complete: function() {
					$this.text(numberWithCommas(this.countNum));
				  }

				});
			});
			$(window).off("scroll", scrollHandlerCounters);
		  }
	}

	$(window).scroll(scrollHandlerCounters);

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	}
};


}( jQuery ));