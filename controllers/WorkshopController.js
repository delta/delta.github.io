
angular.module('delta')
.controller('WorkshopController', ['$scope',WorkshopController]);

function WorkshopController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/workshops.json',
		async: false,
		dataType: 'json'
	}).responseText);

	$scope.workshops=data;

	$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) 
	{
		angular.element('.scrollspy').scrollSpy();
	});

}