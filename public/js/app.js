var connectfour = angular.module('connectfour', ['mainCtrl', 'ngRoute']);

/*
 * Routes
 */
connectfour.config(['$routeProvider',function($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'views/welcome.php',
        controller: 'mainController'
    })

    .when('/game/1', {
        templateUrl: 'views/board.php',
        controller: 'mainController'
    })

    .when('/game/2', {
        templateUrl: 'views/board.php',
        controller: 'mainController'
    })

}]);

/*
 * Custom Directives
 */
var colmuns = [[], [], [], [], [], []];

connectfour.directive('addDot', function() {
    return function(scope, element, attrs){
        element.click(function() {
            var box = element.find('.box');
            box.addClass('red').append('<b></b>');
        })
    }
});