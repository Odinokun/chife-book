module.exports = function() {

  // begin MOBILE MENU
  $('#burger label').on('click', function() {
    $('#menu').toggleClass('active');
    // $('body').toggleClass('no-scroll');
  });
  
  $('.menu__item').on('click', function() {
    $('.submenu-list').removeClass('active');
    $(this).children('.submenu-list').addClass('active');
  });
  // end MOBILE MENU

};