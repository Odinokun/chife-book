jQuery(document).ready(function($) {

    // begin SVG for IE
  $(function() {
    svg4everybody();
  });

  // end   SVG for IE

    // begin Chrome Smooth Scroll
  $(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
      } catch(err) {
    };
  });
  // end   Chrome Smooth Scroll


  // begin Fancybox3
  $('[data-fancybox]').fancybox({
    protect: true
  });
  // end   Fancybox3

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

    // begin VIDEO
  $('.video').on('click', function() {
    $('.video').addClass('play');
  });
  // end VIDEO

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


 // begin TICKER
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
  // end TICKER

 // begin PayForm
  // делаем активной кнопку взноса
  $('.send__cash-btn input').on('click', function() {
      if ($('input[name="send"]').is(':checked')) {
        $('.send__cash-btn').removeClass('active');
        $(this).parent('.send__cash-btn').addClass('active');
      }
  });

  // убираем нажатые кнопки взноса при выборе поля ввода суммы
  $('.send__cash-btn-input').on('click', function() {
    $('input[name="send"]').removeAttr('checked');
    $('.send__cash-btn').removeClass('active');
  });

  // переключаем поля оплаты в send.html
  $('.send__cash-next').on('click', function() {
    var sendNum = $(this).data('send');

    $('.send__field, .send__step').removeClass('active');
    
    $('.send__step-' + sendNum).addClass('active');
    $('.send__field-' + sendNum).addClass('active');
  });

  // выбираем способ доставки
  $('.delivery-radio').on('click', function() {
    var delivery  = $('.delivery-radio:checked').val();
    var pay       = $('.delivery-radio:checked').data('pay');

    $('.send__input-wrap, .send__input-pay, .send-btn').removeClass('active');
    $('.send__input-pay input').prop('checked', false);
    
    // активируем нужные поля ввода
    $('.send__input-wrap.' + delivery).addClass('active');
    // активируем нужные способы оплаты
    $('.send__input-pay.' + pay).addClass('active');
    $('.send__input-pay.' + pay + " " + 'input:first').prop('checked', true);
    // активируем нужную кнопку
    $('.send-btn.' + pay).addClass('active');
  });

  // выбираем кнопку оплаты/оформления
  $('.send__input-pay input').on('click', function() {
    var pay  = $(this).val();
    console.log(pay);
    
    $('.send-btn').removeClass('active');
    $('.send-btn.' + pay).addClass('active');
  });
  // end   PayForm


    // begin tab in family page
  $('.family__tab-btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.family__tab-father, .family__tab-mother').removeClass('active');
    $('.family__tab-' + tab).addClass('active');
  });
  // end   tab in family page


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

  // BEGIN   jqueryUI
  $(function() {
    // custom selectbox
    $( ".selectmenu" ).selectmenu();

    // change pictures in sertificate page
    $( ".certificate-select" ).selectmenu({
      change: function(event, ui) {
        var sertificatePic = '#pic-' + $(this).attr('id');
        // console.log($(this).attr('id'));
        var sertificateImg = $(ui.item.element[0]).data('path');
        // console.log(sertificatePic);
        // console.log(sertificateImg);
        $(sertificatePic).find('img:first').attr('src', sertificateImg);
        // console.log($(ui.item.element[0]).data('path'));
      }
    });
  });
  // END   jqueryUI

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


  // begin popup open
  $('.popup-open').on('click', function() {
    $('.popup, .popup__layer').fadeIn();
    return false;
  });
  // end   popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('.popup, .popup__layer, .popup-life').fadeOut();
  });
  // end   popup close

  // begin popup-life open
  $('.popup-life-open').on('click', function() {

    var numb = $(this).data('popup');
    var popup = $('.popup-life-' + numb);

    $(popup).fadeIn();
    $('.popup__layer').fadeIn();
    return false;
  });
  // end   popup open

});
