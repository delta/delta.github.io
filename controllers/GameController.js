angular.module('delta')
.controller('GameController', ['$scope',GameController]);

function GameController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/games.json',
		async: false,
		dataType: 'json'
	}).responseText);

	$scope.games=data;
}