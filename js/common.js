var TOKKA = TOKKA || {};
TOKKA.TOP = {};

TOKKA.TOP.FIXED = {

	$window = $(window);

	init: function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters: function(){
		this.$contents = $('.jsc-fixed-contents');
		this.$target = $('.jsc-fixed-widget');
	},
	bindEvent: function(){
		$window.on('scroll', function(){
			console.log($window.scrollTop());
			console.log(this.$target.offset().top);
		});
	}
};

TOKKA.TOP.FIXED.init();
