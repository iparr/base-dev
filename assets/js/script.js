/*
	Author:
		Ian Parr for x

	ToC:
	- 
	- 
	- Navigation minimiser

*/

$(document).ready(function() {
	// =Navigation minimiser
	if ($('body.naked').length>0) {
		// Get height of navigation
		var navHeight = $('#navigation').outerHeight();

		// For rolling up the nav
		function rollUpNav() {
			$('#navigation')
				.css({'overflow':'hidden'})
				.delay(500)
				.animate({
					height: '2em',
					top: -35
				}, {
					duration:500,
					queue:false,
					complete: function() {
						$(this).prepend('<div id="menuLink">Menu</div>');
					}
				});
		};

		// For rolling down the nav
		function rollDownNav() {
			$('#menuLink').hide();
			$('#navigation')
				.animate({
					height: navHeight,
					top:0
				}, {
					duration:500,
					queue:false,
					complete: function() {
						$(this).remove('#menuLink');
					}
				});
		};

		// roll up on load
		rollUpNav();

		$('#navigation').live('mouseenter', function() {
			rollDownNav();
			document.getElementById("tvc").hideBoxes();
		}).live('mouseleave', function() {
			rollUpNav();
			document.getElementById("tvc").showBoxes();
		});
	};

});