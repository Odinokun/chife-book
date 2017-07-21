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
  // end   SVG for IE

};