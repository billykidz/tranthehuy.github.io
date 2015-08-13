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
});

app.controller('AboutCtrl',function($scope){
  $scope.pageClass = 'page-about';
});