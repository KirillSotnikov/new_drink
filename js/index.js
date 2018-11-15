var windowWidth = $(window).width();

if (windowWidth <= 1265) {
    $('.menu_box').removeClass('active');
    $('.menu_btn').click(function(){
        $('.menu').toggleClass('active');
    })
} else {
    $('.menu_btn').click(function(){
        $('header .menu_box').toggleClass('active');
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
