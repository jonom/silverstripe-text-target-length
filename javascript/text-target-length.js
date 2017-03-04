(function($) {
	$.entwine('ss.targetlength', function($){

		$('input.target-length, textarea.target-length').entwine({

			updateCount: function() {
				var field = $(this);
                var countEl = field.siblings('p.target-length-count').first();
				if (!countEl) return;
				var charCount = this.getText().length;
				if (field.data('previousCount') === charCount) return;
				var ideal = field.data('targetIdealLength');
				var min = field.data('targetMinLength');
				var max = field.data('targetMaxLength');
				var targetFulfilled = Math.round((charCount / ideal)*20)*5; //5% increments
				var remark = field.data('hintLengthIdeal');
				var remarkClass = 'good';
                if ((charCount >= min && charCount < ((min + ideal) / 2)) || (charCount <= max && charCount > ((max + ideal) / 2))) {
                    remark = field.data('hintLengthAdequate');
				} else if (charCount < min) {
    				remark = field.data('hintLengthTooshort');
                    remarkClass = 'under';
                    if (charCount === 0) remark = '';
				} else if (charCount > max) {
    				remark = field.data('hintLengthToolong');
                    remarkClass = 'over';
				}
				countEl.attr('class', remarkClass + ' target-length-count');
				countEl.html(field.data('hintLengthTarget').replace('{count}', charCount).replace('{value}', targetFulfilled).replace('{remark}', remark));
				field.data('previousCount', charCount);
			},
			getText: function() {
				var field = $(this);
				if (field.hasClass('htmleditor')) {
					var editor = tinyMCE.getInstanceById(field.attr('ID'));
					if (editor !== undefined) {
						return $(editor.getContent()).text();
					} else {
						return $('<div />').html(field.val()).text();
					}
				}
				return field.val();
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
