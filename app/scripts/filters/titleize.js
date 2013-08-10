'use strict';

angular.module('bulletinStandaloneApp')
  .filter('titleize', [function () {
    return function (input) {
      return 'titleize filter: ' + input;
    };
  }]);
