var TOKKA = TOKKA || {};
TOKKA.TOP = {};

TOKKA.TOP.FIXED = {

	init: function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters: function(){
		this.$window = $(window);
		this.$contents = $('.jsc-fixed-contents');
		this.$target = $('.jsc-fixed-widget');
	},
	bindEvent: function(){
		this.$window.on('scroll', function(){
			console.log(this.$window.scrollTop());
			console.log(this.$target.offset().top);
		});
	}
};

TOKKA.TOP.FIXED.init();
