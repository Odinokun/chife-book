module.exports = function() {

  // begin tezts filer
  $('.tezis-list__filter-btn').on('click', function() {
    $('.tezis-list__filter-btn').removeClass('active');
    $(this).addClass('active');
  });


  $('.tezis-list__filter-btn').on('click', function() {
    var vis = $(this).data('tezis');
    // var $content = $('#tezis-list__masonry');

    if (vis == 'all') {
      $('.tezis-list__item').fadeIn(100);
      // $content.masonry();
    }
    else {
      $('.tezis-list__item').fadeOut(100);
      $('.tezis-list__item--' + vis).fadeIn(100);
      // $content.masonry();
    }
  });


  // $('.tezis-list__filter-btn').on('click', function() {
  // });

  // end   tezts filer

};