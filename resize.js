$(window).on('load resize', function resizeCardsAndSquares() {
		if ($(window).width() >= 768) {
			var maxHeightTitle = 0;
			$('#section-buy .info__item').find('h3').height('auto').each(function () {
				if ($(this).height() > maxHeightTitle) {
					maxHeightTitle = $(this).height();
				}
			}).height(maxHeightTitle);
		}
});