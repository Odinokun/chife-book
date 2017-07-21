module.exports = function() {

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

};