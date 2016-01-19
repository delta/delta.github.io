angular.module('delta')
.controller('HomeController', ['$scope', HomeController]);
function HomeController($scope) {

	var data = JSON.parse($.ajax({
		url: 'data/projects.json',
		async: false,
		dataType: 'json'
	}).responseText);

	var count=0;
	
	$scope.projects=[];
	
	for(var i=0;i<data.length;i++)
	{
		if(count<=3&&data[i]['add_to_home'])
		{
			$scope.projects[count]=data[i];	
			count++;
		}	
	}
}