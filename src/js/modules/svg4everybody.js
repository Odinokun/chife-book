module.exports = function() {

  // begin SVG for IE
  $(function() {
    svg4everybody();
  });


  var $ticker = $('[data-ticker="list"]'),
      tickerItem = '[data-ticker="item"]'
      itemCount = $(tickerItem).length,
      viewportWidth = 0;
  function setupViewport(){
      $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');
      for (i = 0; i < itemCount; i ++){
          var itemWidth = $(tickerItem).eq(i).outerWidth();
          viewportWidth = viewportWidth + itemWidth;
      }
      $ticker.css('width', viewportWidth);
  }

  function animateTicker(){
      $ticker.animate({
          marginLeft: -viewportWidth
        }, 100000, "linear", function() {
          $ticker.css('margin-left', '0');
          animateTicker();
        });
  }

  function initializeTicker(){
      setupViewport();
      animateTicker();
      
      $ticker.on('mouseenter', function(){
          $(this).stop(true);
      }).on('mouseout', function(){
          animateTicker();
      });
  }

  initializeTicker();



  $('.header__search-open').on('click', function() {
    $('.header__search-open').fadeOut();
    $('.header__search-close').fadeIn();
    $('.header__search').fadeIn();
  });
  $('.header__search-close').on('click', function() {
    $('.header__search-close').fadeOut();
    $('.header__search-open').fadeIn();
    $('.header__search').fadeOut();
  });

  
  $('.video').on('click', function() {
    $('.video').addClass('play');
  });

  // end   SVG for IE

};