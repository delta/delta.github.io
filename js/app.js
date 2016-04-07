var delta = angular.module('delta',['ui.router']);
delta.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise("/home");

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: 'HomeController'
    })

    .state('members', {
      url: "/members",
      templateUrl: "views/members.html",
      controller: 'MemberController'
    })

    .state('projects', {
      url: "/projects",
      templateUrl: "views/projects.html",
      controller: "ProjectController"
    })

    .state('workshops', {
      url: "/workshops",
      templateUrl: "views/workshops.html",
      controller: "WorkshopController"
    })

    .state('competitions', {
      url: "/competitions",
      templateUrl: "views/competitions.html",
      controller: "CompetitionController"
    })

    .state('portals', {
      url: "/portals",
      templateUrl: "views/portals.html",
      controller: "PortalController"
    })

    .state('games', {
      url: "/games",
      templateUrl: "views/games.html",
      controller: "GameController"
    });

}); 


delta.run(function($rootScope) { 
  
  
  angular.element(".button-collapse").sideNav();
  
  $rootScope.isFullPageEnabled = false;
  $rootScope.pageBreakPoint = 992;

  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		
    if($rootScope.isFullPageEnabled)
    {
      $.fn.fullpage.destroy('all');
    }
    angular.element(".button-collapse").sideNav('hide');  
    angular.element(".triangles").show();
    angular.element("#content").hide();

  });
  $rootScope.$on("$viewContentLoaded", function(event, toState, toParams, fromState, fromParams) {
		
		angular.element(".triangles").hide();
		angular.element("#content").show();
  
  });
});

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

require('controllers/HomeController.js');
require('controllers/MemberController.js');
require('controllers/ProjectController.js');
require('controllers/WorkshopController.js');
require('controllers/CompetitionController.js');
require('controllers/PortalController.js');
require('controllers/GameController.js');
require('directives/ScrollSpy.js');
require('directives/SmoothScroll.js');
