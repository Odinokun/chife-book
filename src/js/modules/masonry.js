module.exports = function() {

  // begin SVG for IE
  function masonryFunc(){
    var $container = $('.tezis-list__masonry');

    $container.masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.tezis-list__item',
      gutter: 30,
      percentPosition: true,
      horizontalOrder: true
    });
  } 
  masonryFunc()
  setTimeout(masonryFunc,300)

  //перестраивание сетки при клике на фильтр
  // AHTUNG  обязательно указать параметр 100 у fadeIn/fadeOut (в данном случае в файле tezisFilter.js)
  $('.tezis-list__filter-btn').on('click', function() {
    var $container = $('.tezis-list__masonry');
    $container.masonry();
    masonryFunc()
    setTimeout(masonryFunc,300)
  });

  // end   SVG for IE

};