var windowWidth = $(window).width();

if (windowWidth <= 1265) {
    $('.menu_box').removeClass('active');
    $('.menu_btn').click(function(){
        $('.menu').toggleClass('active');
    })
} else {
    $('.menu_btn').click(function(){
        $('.menu_box').toggleClass('active');
    });
}
// --------------------------------------------
$('.modal_menu_btn').click(function(){
    $('.modal_menu_box').addClass('active');
});
$('.modal_menu_box_closer').click(function(){
    $('.modal_menu_box').removeClass('active');
});
// --------------------------------------------
$('.big_slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  
    fade: true,
    arrows: false,  
    // vertical: true,
    // verticalSwiping: true,
    asNavFor: '.nav_slider .slider',
});
// --------------------------------------------
$('.nav_slider .slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    // dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,  
    // arrows: false,  
    asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow up"><img src="img/arrow.png"></div>',
    nextArrow: '<div class="arrow down"><img src="img/arrow.png"></div>',

});
// ----------------------------------------
$('.hit_slider .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,  
    // fade: true,
    // arrows: false,  
    // vertical: true,
    // verticalSwiping: true,
    prevArrow: '<div class="arrow left"><img src="img/left_arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="img/right_arrow.png"></div>',
    responsive: [
        {
          breakpoint: 781,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 551,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ],
});
// ----------------------------------------
$('.mark .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,  
    // fade: true,
    // arrows: false,  
    // vertical: true,
    // verticalSwiping: true,
    prevArrow: '<div class="arrow left"><img src="img/left_arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="img/right_arrow.png"></div>',
    responsive: [
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 551,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ],
});
// ----------------------------------------
$('.link').on('click', function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('html, body').animate({scrollTop: top}, 800);
    setTimeout(function() {
        window.location = id;
    }, 700);
});
// -------------------------------------
$('[data-tab]').click(function(){
    var target = $(this).attr('data-tab');

    $('.category_tabs_box').removeClass('active');
    $('.category_tabs_box' + target).addClass('active');
});
// -------------------------------------

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
};