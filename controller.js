var myApp = angular.module('myApp', ['ngRoute']);
	
	myApp.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl: 'trump-tweets.html',
			controller: 'trumpTweets'
		}).
		when('/load-tweets',{
			templateUrl: 'load-tweets.html',
			controller: 'loadTweets'
		}).
		otherwise({
			redirectTo: 'trump-tweets.html'
		});
	});

myApp.controller('trumpTweets',function ($scope, $location){

	$scope.secondPage = function(){
		$location.path('load-tweets.html')
	}
});