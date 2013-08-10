'use strict';

angular.module('bulletinStandaloneApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
