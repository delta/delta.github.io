angular.module('delta')
.controller('CompetitionController', ['$scope',CompetitionController]);

function CompetitionController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/competitions.json',
		async: false,
		dataType: 'json'
	}).responseText);

	$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) 
	{
		angular.element('.scrollspy').scrollSpy();
	});

	$scope.competitions=data;
}