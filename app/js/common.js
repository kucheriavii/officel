$(function() {
    sandwich(); //анимация для кнопки меню
	sliders(); //слайдеры
    hovers(); //события ховер на мышь
    setActive(); //активные елементы

});

var sandwich = function(){ //Сендвич анимация на кнопку меню для мобильных версий
    $(".sandwich, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
        if($(".sandwich").hasClass("active")){
            $('.main-menu').addClass('active');
        } else{
            $('.main-menu').removeClass('active');
        }
    });
};

var sliders = function(){

    /*Слайдер шапки сайта*/
    $('.header-user__slider').slick({
        nextArrow: '<span class="slider_arrow_next"></span>',
        prevArrow: '<span class="slider_arrow_prev"></span>'
    });

    /*Слайдер рекомендованых товаров*/
    $('.items .articles-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<span class="light_arrow_next"></span>',
        prevArrow: '<span class="light_arrow_prev"></span>'
    });

    /*кнопки прокрутки слайдера товаров*/
    var prevSlideBtn = ".prev-slide",
        nextSlideBtn = ".next-slide";

    $(document).on('click', prevSlideBtn, function(e){
        $('.items .articles-wrap').slick('slickPrev');
    });
    $(document).on('click', nextSlideBtn, function(e){
        $('.items .articles-wrap').slick('slickNext');
    });
};

var hovers = function(){
    var submenuItem = ".main-submenu__item"; //меню хедера

    $(document).on('mouseenter', submenuItem, function(e){
        $('.main-submenu__window-text').text($(e.target).text());
        console.log($(this).data('src'))
        $('.main-submenu__window-img').attr('src', $(this).data('src'))
    })
};

var setActive = function(){
    //variables
    var addCartBtn = '.button-item-add';

    //events
    $(document).on('click', addCartBtn, function(e){
        $(this).toggleClass('active');
    })

};