angular.module('delta')
.controller('PortalController', ['$scope',PortalController]);

function PortalController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/portals.json',
		async: false,
		dataType: 'json'
	}).responseText);

	$scope.portals=data;
}