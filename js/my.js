var app=angular.module('myapp',['ngRoute']);
app.config(function ($routeProvider){
	$routeProvider
      .when('/', {
        templateUrl: 'view/main.html',
        controller: 'MainCtrl'
      });
});

app.controller('MainCtrl',function($scope){
	
	$scope.title='Hello world';

});