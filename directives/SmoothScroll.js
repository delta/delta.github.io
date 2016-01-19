angular.module('delta')
.directive('scrollSpy', function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {	
		var Window = $(window);	

		function initializeSmoothScroll() {
			
			$('#fullpage').fullpage({

		        menu: '#menu',
		        navigation: false,
		        css3: true,
		        scrollingSpeed: 700,
		        scrollBar: false,
		        easing: 'easeInOutCubic',
		        easingcss3: 'ease',
		        touchSensitivity: 10,
		        paddingTop: '4em',
		        normalScrollElementTouchThreshold: 3,
		        keyboardScrolling: true,

	    	});
		}		
		
		function destroySmoothScroll() {
			$.fn.fullpage.destroy('all');
		}	
		
		if(Window.width()>1048) {
			initializeSmoothScroll();
		}

		Window.on('resize',function(){
			if(Window.width()>1048) {
			 initializeSmoothScroll();
			}
			else {
				destroySmoothScroll();
			}
		});

		}
	}
});