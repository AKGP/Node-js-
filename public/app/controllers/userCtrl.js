angular.module('userController',[]).
controller('regCtrl',function($http){
    var app = this;
    
    this.regUser = function(regData){
        console.log(app.regData);
        $http.post('api/register',app.regData);
        app.regData = {};
    }
})
