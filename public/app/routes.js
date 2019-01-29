var app = angular.module('appRoutes',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl:'app/views/pages/main.html'
    })
    .when('/register',{
        templateUrl:'app/views/pages/register.html',
        controller:'regCtrl',
        controllerAs:'reg'
    })
    .when('/login',{
        templateUrl:'app/views/pages/login.html'
    })
    .when('/users',{
        templateUrl:'app/views/pages/users.html'
    })
    .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode({
		enabled:true,
		requireBase:false
	});
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
