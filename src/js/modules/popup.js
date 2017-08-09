module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    $('.popup, .popup__layer').fadeIn();
  });
  // end   popup open

  // begin popup close
  $('.popup__layer').on('click', function() {
    $('.popup, .popup__layer').fadeOut();
  });
  // end   popup close

};