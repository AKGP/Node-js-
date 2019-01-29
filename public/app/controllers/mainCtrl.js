angular.module('mainController',[]).
controller('mainCtrl',function($http, $scope){
    var app = this;
    this.message = "Hello from main Controller";
    //$http.get('api/users',app.data);

    $http.get('api/users').then(function(response) {
         $scope.user = response.data.data;
     });

    console.log(app)
});