(()=>{
  angular.module('portfolio.component.posts', [])
    .controller('PostsController', PostsController);

    function PostsController(PortfolioService) {
      const vm = this;
      vm.portfolios = PortfolioService.portfolio;
      vm.getClass = (idx)=>{
        return idx < 3 ? `md-accent md-hue-${idx + 1}` : `md-warn md-hue-${idx - 3 + 1}`;
      };
    } 

    PostsController.$inject = ['PortfolioService'];
})();