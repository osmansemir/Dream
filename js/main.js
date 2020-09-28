
var navigatorRight = document.querySelector('#navigator-right');
var navigatorLeft = document.querySelector('#navigator-left');
var menuBox = document.querySelector('.mini-menu-box');
var firstItem = document.querySelector('.mini-menu-box :first-child');
var moreItems = document.querySelector('#more-items');

//*only for home page
if(document.body.getAttribute('id') === 'home-page'){

  navigatorLeft.addEventListener('click', function(e){
    menuBox.scrollBy( {
      left: -100,
      behavior: 'smooth'
    });
  });
  navigatorRight.addEventListener('click', function (e) {
    menuBox.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  });

  let observer = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting){
      if (entries[0].intersectionRatio <= 0.6){
        let button = document.querySelector('#' + entries[0].target.getAttribute('data-nav'));
        button.classList.add('is-visible');
      }
    } else {
      if (entries[0].intersectionRatio >= 0.95) {
        let button = document.querySelector('#' + entries[0].target.getAttribute('data-nav'));
        button.classList.remove('is-visible');
      }
    }
  }, {threshold: [0.6, 0.95], root: menuBox});
  
  observer.observe(moreItems);
  observer.observe(firstItem);
}



//*header navigations
var hamburger = document.querySelector('.hamburger');
var headerNav = document.querySelector('header .small-screen-nav');
var dimScreen = document.querySelector('.small-screen-nav .dim');

hamburger.addEventListener('click', function(e){
  headerNav.classList.toggle('is-open');
  hamburger.classList.toggle('is-open');
  
});
dimScreen.addEventListener('click', function () {
  headerNav.classList.remove('is-open');
  hamburger.classList.remove('is-open');
});


