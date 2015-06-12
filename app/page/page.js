'use strict';

angular.module('myApp.page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'page/index.html',
    controller: 'PageCtrl'
  });
}])
.factory('JobSrvc', function() {
  
  

})
.controller('PageCtrl', [function() {

}]);