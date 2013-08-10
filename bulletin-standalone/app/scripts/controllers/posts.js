'use strict';

angular.module('bulletinStandaloneApp')
  .controller('PostsCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
