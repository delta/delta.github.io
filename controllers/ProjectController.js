angular.module('delta')
.controller('ProjectController', ['$scope',ProjectController]);

function ProjectController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/projects.json',
		async: false,
		dataType: 'json'
	}).responseText);

	$scope.projects=data;
}