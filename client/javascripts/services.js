(()=>{
  angular.module('portfolio.services', []).services('PortfolioService', PortfolioService);
  
  function PortfolioService(){
    this.portfolio = [
      {
        title: 'Angular Blog',
        date: 'Jun 2016',
        github: 'https://github.com/kakorcal/angular_blog_app',
        link: null,
        images: {path: '', slides: ['1', '2', '3']}
      },
      {
        title: 'Knex Photo App',
        date: 'Jun 2016',
        github: 'https://github.com/kakorcal/knex_photo_app',
        link: null,
        images: {path: '', slides: ['1', '2', '3']}
      },
      {
        title: 'Linguo Language App',
        date: 'Apr 2016',
        github: 'https://github.com/kakorcal/linguo',
        link: 'https://linguoisdead.herokuapp.com/',
        images: {path: '', slides: ['1', '2', '3']}
      },
      {
        title: 'Bomberman Clone',
        date: 'Mar 2016',
        github: 'https://github.com/kakorcal/bomberman',
        link: 'http://house-keeper-mole-58621.bitballoon.com/',
        images: {path: '', slides: ['1', '2', '3']}
      },
      {
        title: 'Sara Faith Alterman',
        date: 'Oct 2015',
        github: 'https://github.com/kakorcal/sara_alterman',
        link: 'http://sarafaithalterman.com/',
        images: {path: '', slides: ['1', '2', '3']}
      },
      {
        title: 'Michael Baca Photography',
        date: 'Dec 2015',
        github: 'https://github.com/kakorcal/michael_baca',
        link: 'http://michaelbaca.com/',
        images: {path: '', slides: ['1', '2', '3']}
      }
    ]; 
  }

})();