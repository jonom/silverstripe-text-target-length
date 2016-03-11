(function($) {
	$.entwine('ss.targetlength', function($){

		$('div.field.target-length input, div.field.target-length textarea').entwine({

			updateCount: function() {
				var field = $(this);
                var countEl = field.next('p.target-length-count');
				if (!countEl) return;
				var charCount = field.val().length;
				if (field.data('previousCount') === charCount) return;
				var ideal = field.data('targetIdealLength');
				var min = field.data('targetMinLength');
				var max = field.data('targetMaxLength');
				var targetFulfilled = Math.round((charCount / ideal)*20)*5; //5% increments
				var remark = 'Great!';
				var remarkClass = 'good';
                if ((charCount >= min && charCount < ((min + ideal) / 2)) || (charCount <= max && charCount > ((max + ideal) / 2))) {
                    remark = 'Okay';
				} else if (charCount < min) {
    				remark = 'Keep going!';
                    remarkClass = 'under';
                    if (charCount === 0) remark = '';
				} else if (charCount > max) {
    				remark = 'Too long'
                    remarkClass = 'over';
				}
				countEl.attr('class', remarkClass + ' target-length-count');
				countEl.html('Length target: <b>' + targetFulfilled + '%</b> <i>' + remark + '</i>');
				field.data('previousCount', charCount);
			},
			onadd: function() {
				// Insert extra markup
				var field = $(this);
				field.parent().append('<p class="target-length-count">');
				this.updateCount();
			},
			onpropertychange: function() {
				this.updateCount();
			},
			onchange: function() {
				this.updateCount();
			},
			onclick: function() {
				this.updateCount();
			},
			onkeyup: function() {
				this.updateCount();
			},
			oninput: function() {
				this.updateCount();
			},
			onpaste: function() {
				this.updateCount();
			}
		});
	});
}(jQuery));
