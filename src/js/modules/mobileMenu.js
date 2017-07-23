module.exports = function() {

  // begin MOBILE MENU
  $('#burger label').on('click', function() {
    $('#menu').toggleClass('active');
    //закрываем блок поиска
    $('.header__search-close').fadeOut();
    $('.header__search-open').fadeIn();
    $('.header__search').fadeOut();
  });
  
  $('.menu__item').on('click', function() {
    $('.submenu-list').removeClass('active');
    $(this).children('.submenu-list').addClass('active');
  });
  // end MOBILE MENU

};