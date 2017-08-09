jQuery(document).ready(function($) {
  /////
  // ***** BEGIN Standarts scripts *****
  /////

  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin Chrome Smooth Scroll
  require('./modules/smoothScroll')();
  // end   Chrome Smooth Scroll

  // begin Fancybox3
  require('./modules/fancybox')();
  // end   Fancybox3

  /////
  // ***** END Standarts scripts *****
  /////

  // begin mobile menu
  require('./modules/mobileMenu')();
  // end   mobile menu

  // begin video
  require('./modules/video')();
  // end   video

  // begin search
  require('./modules/search')();
  // end   search

  // begin ticker
  require('./modules/ticker')();
  // end   ticker

  // begin pay form
  require('./modules/payForm')();
  // end   pay form

  // begin tab in family page
  require('./modules/tabFamily')();
  // end   tab in family page

  // begin masonry gallery
  require('./modules/masonry')();
  // end   masonry gallery

  // begin jqueryUI
  require('./modules/jqueryUI')();
  // end   jqueryUI

  // begin tezis Filter
  require('./modules/tezisFilter')();
  // end   tezis Filter

});