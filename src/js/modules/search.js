module.exports = function() {

  // begin SEARCH
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
  // end SEARCH

};