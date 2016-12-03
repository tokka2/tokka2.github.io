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
		this.contentHtml = this.$contents.html();
		this.$target = $('.jsc-fixed-widget');
	},
	bindEvent: function(){
		var scrollValue = 0;
		var _self = this;
		this.$window.on('scroll load', function(){
			scrollValue = _self.$window.scrollTop();
			if (_self.$target.children().length === 0) {
				_self.$target.html(_self.contentHtml);
			}
			if (scrollValue > _self.$target.offset().top) {
				_self.$target.addClass('isFixed');
			} else {
				_self.$target.removeClass('isFixed');
			}
		});
	}
};

TOKKA.TOP.FIXED.init();
