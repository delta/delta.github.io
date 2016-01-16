angular.module('delta')
.controller('MemberController', ['$scope',MemberController]);
function MemberController($scope) {

  var data = JSON.parse($.ajax({
        url: 'data/members.json',
        async: false,
        dataType: 'json'
      }).responseText);

  $scope.fourthYearMembers = data.fourthYears;
  $scope.thirdYearMembers = data.thirdYears;
  $scope.secondYearMembers = data.secondYears;

  $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) 
  {
	   angular.element('.scrollspy').scrollSpy();
  });

}