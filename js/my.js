var app=angular.module('myapp',['ngRoute']);
app.config(function ($routeProvider){
	$routeProvider
      .when('/', {
        templateUrl: 'view/main.html',
        controller: 'MainCtrl'
      });
});

app.controller('MainCtrl',function($scope){
	
	$scope.title='13 cards game';
	$scope.start='Start now!';
	$scope.footer='Johnny Chen copyright 2015';

});