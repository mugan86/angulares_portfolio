'use strict';

/**
 * @ngdoc function
 * @name mugan86App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mugan86App
 */
angular.module('mugan86App')
  .controller('ProjectsCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = 'http://lorempixel.com/output/city-q-c-1920-1920-2.jpg';
  });
