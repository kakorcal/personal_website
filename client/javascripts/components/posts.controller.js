(()=>{
  angular.module('portfolio.component.posts', [])
    .controller('PostsController', PostsController);

    function PostsController(PortfolioService) {
      
    } 

    PostsController.$inject = ['PortfolioService'];
})();