(()=>{
  angular.module('portfolio.services', []).service('PortfolioService', PortfolioService);
  
  function PortfolioService(){
    this.portfolio = [
      {
        title: 'Angular Blog',
        date: 'Jun 2016',
        github: 'https://github.com/kakorcal/angular_blog_app',
        link: null,
        images: {path: 'angular_blog', slideCount: 3}
      },
      {
        title: 'Knex Photo App',
        date: 'Jun 2016',
        github: 'https://github.com/kakorcal/knex_photo_app',
        link: null,
        images: {path: 'knex_photo', slideCount: 3}
      },
      {
        title: 'Linguo Language App',
        date: 'Apr 2016',
        github: 'https://github.com/kakorcal/linguo',
        link: 'https://linguoisdead.herokuapp.com/',
        images: {path: 'linguo', slideCount: 3}
      },
      {
        title: 'Bomberman Clone',
        date: 'Mar 2016',
        github: 'https://github.com/kakorcal/bomberman',
        link: 'http://house-keeper-mole-58621.bitballoon.com/',
        images: {path: 'bomberman', slideCount: 3}
      },
      {
        title: 'Michael Baca Photography',
        date: 'Dec 2015',
        github: 'https://github.com/kakorcal/michael_baca',
        link: 'http://michaelbaca.com/',
        images: {path: 'michael_baca', slideCount: 3}
      },
      {
        title: 'Sara Faith Alterman',
        date: 'Oct 2015',
        github: 'https://github.com/kakorcal/sara_alterman',
        link: 'http://sarafaithalterman.com/',
        images: {path: 'sara_alterman', slideCount: 3}
      }
    ]; 
  }

})();