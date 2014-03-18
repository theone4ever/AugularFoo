/**
 * Created with IntelliJ IDEA.
 * User: eqqiwng
 * Date: 3/16/14
 * Time: 17:44
 * To change this template use File | Settings | File Templates.
 */
var demoApp = angular.module("demoApp", ['ngRoute', 'angles']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/customers', {
            controller: 'SimplerController',
            templateUrl: 'app/partials/customers.html'
        })
        .when('/city', {
            controller: 'SimplerController',
            templateUrl: 'app/partials/city.html'

        }).when('/', {
            controller: 'SimplerController',
            templateUrl: 'app/partials/customers.html'
        })
        .otherwise({ redirecTo: '/customers'});
});
