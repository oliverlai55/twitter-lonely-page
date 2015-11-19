var myApp = angular.module('myApp', ['ngRoute']);
	
	myApp.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl: 'trump-tweets.html',
			controller: 'trumpTweets'
		}).
		when('/load-tweets.html',{
			templateUrl: 'load-tweets.html',
			controller: 'loadTweets'
		}).
		otherwise({
			redirectTo: '/'
		});
	});

myApp.controller('trumpTweets',function ($scope, $location, $http){
$scope.dataList = [];
	
		var url ="http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=trump";
		
		$http.get(url).success(function(data){
			$scope.data = data.statuses;

			console.log($scope.data);
			
		});	
	

	$scope.secondPage = function(){
		$location.path('load-tweets.html')
	}
	$scope.homePage = function(){
		$location.path('trump-tweets.html')
	}

});
myApp.controller('loadTweets',function ($scope, $location, $http){
$scope.dataList = [];
	
		var url ="http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=trump&secondHash=women";
		
		$http.get(url).success(function(data){
			$scope.data = data.statuses;

			console.log($scope.data);
			
		});	
	

	

});