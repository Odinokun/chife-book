module.exports = function() {

  // begin tab in family page
  $('.family__tab-btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.family__tab-father, .family__tab-mother').removeClass('active');
    $('.family__tab-' + tab).addClass('active');
  });
  // end   tab in family page

};