var TOKKA = TOKKA || {};
TOKKA.TOP = {};

TOKKA.TOP.FIXED = {

	init: function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters: function(){
		this.$window = $(window);
		this.windowHeight = this.$window.height()
		this.$contents = $('.jsc-fixed-contents');
		this.$target = $('.jsc-fixed-widget');
		this.targetTop = this.$target.offset().top;
		this.contentHtml = this.$contents.innerHTML;
	},
	bindEvent: function(){
		var scrollValue = 0;
		var _self = this;
		this.$window.on('scroll load', function(){
			scrollValue = _self.$window.scrollTop();
			if (_self.$target.children().length > 0) {
				_self.$target.html(_self.contentHtml);
			}
			if (scrollValue > _self.targetTop) {
				console.log(scrollValue);
				console.log(_self.targetTop);
				_self.$target.addClass('isFixed');
			} else {
				_self.$target.removeClass('isFixed');
			}
		});
	}
};

TOKKA.TOP.FIXED.init();
