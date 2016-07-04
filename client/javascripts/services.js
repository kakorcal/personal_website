(()=>{
  angular.module('portfolio.services', []).service('PortfolioService', PortfolioService);
  
  function PortfolioService(){
    this.portfolio = [
      {
        id: 1,
        title: 'Angular Blog',
        date: 'Jun 2016',
        desc: "Simple single page application where users can post their blogs as well as rate other user's blogs.",
        github: 'https://github.com/kakorcal/angular_blog_app',
        link: null,
        images: {path: 'angular_blog', slideCount: 3}
      },
      {
        id: 2,
        title: 'Knex Photo App',
        date: 'Jun 2016',
        desc: 'Photo sharing application built with node.js. Also using passport.js for authentication and authorization.',
        github: 'https://github.com/kakorcal/knex_photo_app',
        link: null,
        images: {path: 'knex_photo', slideCount: 3}
      },
      {
        id: 3,
        title: 'Linguo Language App',
        date: 'Apr 2016',
        desc: "Full-stack JavaScript application that helps users find language partners based on their location.",
        github: 'https://github.com/kakorcal/linguo',
        link: 'https://linguoisdead.herokuapp.com/',
        images: {path: 'linguo', slideCount: 3}
      },
      {
        id: 4,
        title: 'Bomberman Clone',
        date: 'Mar 2016',
        desc: "JavaScript desktop game built with HTML5 canvas. Using the phaser.js framework for animations.",
        github: 'https://github.com/kakorcal/bomberman',
        link: 'http://house-keeper-mole-58621.bitballoon.com/',
        images: {path: 'bomberman', slideCount: 3}
      },
      {
        id: 5,
        title: 'Michael Baca Photography',
        date: 'Dec 2015',
        desc: "Custom WordPress theme designed to showcase client's photo collection.",
        github: 'https://github.com/kakorcal/michael_baca',
        link: 'http://michaelbaca.com/',
        images: {path: 'michael_baca', slideCount: 3}
      },
      {
        id: 6,
        title: 'Sara Faith Alterman',
        date: 'Oct 2015',
        desc: "Custom WordPress theme designed to promote client's blog posts and writings.",
        github: 'https://github.com/kakorcal/sara_alterman',
        link: 'http://sarafaithalterman.com/',
        images: {path: 'sara_alterman', slideCount: 3}
      }
    ]; 
  }

})();