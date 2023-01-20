var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl : 'app/views/home.html',
      controller  : 'HomeController'
    })

    .when('/birthday', {
      templateUrl : 'app/views/birthday.html',
      controller  : 'BirthdayController'
    })

    .when('/software', {
      templateUrl : 'app/views/software.html',
      controller  : 'SoftwareController'
    })
  
    .otherwise({redirectTo: '/'});
});