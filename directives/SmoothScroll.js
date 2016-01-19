angular.module('delta')
.directive('smoothScroll', ['$rootScope',function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {	

			var Window = $(window);	
			var pageBreakPoint = $rootScope.pageBreakPoint;
			var status = 0;

			function initializeSmoothScroll() {

				$('#fullpage').fullpage({

			        menu: '#menu',
			        css3: true,
			        scrollingSpeed: 700,
			        navigation: true,
			        scrollBar: false,
			        easing: 'easeInOutCubic',
			        easingcss3: 'ease',
			        touchSensitivity: 20,
			        normalScrollElementTouchThreshold: 5,
			        keyboardScrolling: true,

		    	});
		    	$rootScope.isFullPageEnabled = true;

			}		
					

			function destroySmoothScroll() {

				if($rootScope.isFullPageEnabled)
				{
					$.fn.fullpage.destroy('all');
					$rootScope.isFullPageEnabled = false;
				}

			}	

			function canEnable(){

				if( Window.width() < pageBreakPoint) {
					return 0;
				}
				else if(Window.width()>pageBreakPoint) {
					if(!$rootScope.isFullPageEnabled){
						return 1;	
					}
					else {
						return 2;
					}
				}

			}

			scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) 
			{
				if(canEnable()==2){
					destroySmoothScroll();
					initializeSmoothScroll();	
				}
			});
			
			if(canEnable()==1) {
				initializeSmoothScroll();
			}

			Window.on('resize',function() {
				if(canEnable()==1) {
					initializeSmoothScroll();
				}
				else if(canEnable()==0) {
					destroySmoothScroll();
				}
			});

		}
	}
}]);