(()=>{
  angular.module('portfolio.routes', ['ngRoute']).config(routes);

  function routes($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '../views/pages/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }

  routes.$inject = ['$routeProvider', '$locationProvider'];
})();