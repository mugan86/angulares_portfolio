'use strict';

/**
 * @ngdoc function
 * @name mugan86App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mugan86App
 */
angular.module('mugan86App')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.url = 'images/post-bg.jpg';
    $rootScope.selectLanguage = window.localStorage.getItem('lang');
  });
