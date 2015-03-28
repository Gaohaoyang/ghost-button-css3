$(document).ready(function() {
	$('.link .button').hover(function() {
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).position().left+10;
		var dis = ($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l = pos - dis;
		$('.tip').css({
			'left': l+'px'
		}).animate({'top':146,'opacity':1}, 300);
	}, function() {
		/* Here still is a bug, I don't know how to fix it */
		if (!$('.tip').is(':animated')) {
			$('.tip').animate({'top': 100, 'opacity': 0}, 200);
		};
	});
});