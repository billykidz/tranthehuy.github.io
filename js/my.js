var app=angular.module('myapp',['ngRoute','ngAnimate']);

app.config(function ($routeProvider){
	$routeProvider
      .when('/', {
        templateUrl: 'view/main.html',
        controller: 'MainCtrl'
      })
      .when('/board', {
        templateUrl: 'view/board.html',
        controller: 'BoardCtrl'
      })
      .when('/about', {
        templateUrl: 'view/about.html',
        controller: 'AboutCtrl'
      })
      ;
});

app.controller('MainCtrl',function($scope){
	$scope.title='13 CARDS GAME';
	$scope.start='Start now!';
	$scope.about='About me ^^';
	$scope.footer='Johnny Chen copyright 2015';
  $scope.pageClass = 'page-main';
});

app.controller('BoardCtrl',function($scope){
  $scope.pageClass = 'page-board';
  $scope.userCards = [
    {
      'type':'heart',
      'volume':'1',
    },
    {
      'type':'heart',
      'volume':'2',
    },
    {
      'type':'heart',
      'volume':'3',
    },
    {
      'type':'heart',
      'volume':'4',
    },
    {
      'type':'heart',
      'volume':'5',
    },
    {
      'type':'heart',
      'volume':'6',
    },
    {
      'type':'heart',
      'volume':'7',
    },
    {
      'type':'heart',
      'volume':'8',
    },
    {
      'type':'heart',
      'volume':'9',
    },
    {
      'type':'heart',
      'volume':'10',
    },
    {
      'type':'heart',
      'volume':'11',
    },
    {
      'type':'heart',
      'volume':'12',
    },
    {
      'type':'heart',
      'volume':'13',
    },
  ];
});

app.controller('AboutCtrl',function($scope){
  $scope.pageClass = 'page-about';
});