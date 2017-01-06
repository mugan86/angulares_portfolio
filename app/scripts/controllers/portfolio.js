'use strict';

/**
 * @ngdoc function
 * @name mugan86App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mugan86App
 */
angular.module('mugan86App')
  .controller('PortfolioCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = 'images/river.jpg';
    $rootScope.titlePage = "Portfolio";
  });
