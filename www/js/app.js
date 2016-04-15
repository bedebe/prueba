angular.module('App', ['ngRoute'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'views/view.html'
        })
        .otherwise({redirectTo: '/'});
    });