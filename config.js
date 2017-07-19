var app = angular.module('catdog');


app.config(function($routeProvider){
    
    $routeProvider
    .when('/cat', {
        controller: 'routeCtrl',
        templateUrl: 'cat.html'
    })
    .when('/dog', {
        controller: 'routeCtrl',
        templateUrl: 'dog.html'
    })
        .when('/clear', {
        controller: 'routeCtrl',
        templateUrl: '/home'
    })
    .otherwise({redirectTo: '/home'})
    
});