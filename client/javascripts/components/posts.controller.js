(()=>{
  angular.module('portfolio.component.posts', ['bootstrapLightbox'])
    .config(BootstrapLightbox)
    .controller('PostsController', PostsController);

    function BootstrapLightbox(LightboxProvider){
      LightboxProvider.templateUrl = '../../views/partials/_lightbox.html';
      LightboxProvider.fullScreenMode = true;
      console.log(LightboxProvider);
    }

    BootstrapLightbox.$inject = ['LightboxProvider']

    function PostsController(PortfolioService, Lightbox) {
      const vm = this;
      console.log(Lightbox);
      vm.portfolios = PortfolioService.portfolio;
      
      vm.slides = vm.portfolios.reduce((acc, cur)=>{
        for(let i = 0; i < cur.images.slideCount; i++){
          acc.push({url: `/assets/${cur.images.path}/${i+1}.png`});
        }
        return acc;
      }, []);

      vm.openLightboxModal = (images, start)=>{
        Lightbox.openModal(images, start);
      };
      
      vm.getClass = (idx)=>{
        return idx < 3 ? `md-accent md-hue-${idx + 1}` : `md-warn md-hue-${idx - 3 + 1}`;
      };
    } 

    PostsController.$inject = ['PortfolioService', 'Lightbox'];
})();