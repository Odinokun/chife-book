module.exports = function() {

  // begin PayForm
  
  // делаем активной кнопку взноса
  $('.help__cash-btn input').on('click', function() {
      if ($('input[name="help"]').is(':checked')) {
        $('.help__cash-btn').removeClass('active');
        $(this).parent('.help__cash-btn').addClass('active');
      }
  });

  // убираем нажатые кнопки взноса при выборе поля ввода суммы
  $('.help__cash-btn-input').on('click', function() {
    $('input[name="help"]').removeAttr('checked');
    $('.help__cash-btn').removeClass('active');
  });

  // переключаем поля оплаты в help.html
  $('.help__cash-next').on('click', function() {
    $('.help__field, .help__step').removeClass('active');
    if ($(this).hasClass('help__cash-next-01')) {
      $('.help__field-02, .help__step-02').addClass('active');
    }
    else if ($(this).hasClass('help__cash-next-02')) {
      $('.help__field-03, .help__step-03').addClass('active');
    }
  });

  // end   PayForm

};