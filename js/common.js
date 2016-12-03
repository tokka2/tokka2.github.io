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
		this.targetTop = this.$target.offset().top;
		this.contentHtml = this.$contents.innerHTML;
	},
	bindEvent: function(){
		var scrollValue = 0;
		var _self = this;
		this.$window.on('scroll', function(){
			scrollValue = this.$window.scrollTop();
			if (scrollValue > _self.targetTop) {
				console.log(scrollValue);
				console.log(_self.targetTop);
				this.$target.addClass('isFixed');
			} else {
				this.$target.removeClass('isFixed');
			}
		});
	}
};

TOKKA.TOP.FIXED.init();
