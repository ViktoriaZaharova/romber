$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.modal-close, .overlay').on('click', function () {
   $('.overlay').fadeOut();
   $('.modal').fadeOut();
});