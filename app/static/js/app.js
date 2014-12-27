angular.module('MyApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap'])
    .config(function ($routeProvider, $locationProvider) {
        var staticUrl = 'static/js/app/views/';
        $routeProvider
            .when('/', {
                templateUrl: staticUrl + 'main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
