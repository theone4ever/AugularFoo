/**
 * Created with IntelliJ IDEA.
 * User: eqqiwng
 * Date: 3/16/14
 * Time: 17:44
 * To change this template use File | Settings | File Templates.
 */

angular.module("d3",[]);
var demoApp = angular.module("demoApp", ['ngRoute', 'angles', 'ui.bootstrap', 'd3']);


//angular.module('d3Bars',['d3']);
demoApp.config(function($routeProvider) {

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
        }).when('/chart', {
            controller: 'ChartController',
            templateUrl: 'app/partials/chart.html'
        }).when('/d3demo', {
            controller: 'MainCtrl',
            templateUrl: 'app/partials/d3demo.html'
        }).when('/directgraph', {
            controller: 'MainCtrl',
            templateUrl: 'app/partials/directgraph.html'
        }).when('/dependencygraph', {
            controller: 'DependencyGraphController',
            templateUrl: 'app/partials/dependencygraph.html'
        })
//        .when('/treegraph', {
//            controller: 'FlareCtrl',
//            templateUrl: 'app/partials/treejson.html'
//        })
        .otherwise({
            redirecTo: '/customers'
        });
});