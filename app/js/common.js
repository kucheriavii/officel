$(function() {
    sandwich(); //анимация для кнопки меню
	sliders(); //слайдеры
    hovers(); //события ховер на мышь
    setActive(); //активные елементы
    scrollToTop(); //вешаем кнопку прокрутки вверх




    console.log(userMethods.isMobile());





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

    $('.header-item__slider').slick({
        infinite: true,
        speed: 300,
        centerMode: true,
        variableWidth: true
    });

    // /*Слайдер рекомендованых товаров*/
    // $('.items .articles-wrap').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     nextArrow: '<span class="light_arrow_next"></span>',
    //     prevArrow: '<span class="light_arrow_prev"></span>',
    //     responsive:[
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         }
    //     ]
    // });
    // /*кнопки прокрутки слайдера товаров*/
    // var prevSlideItemsBtn = ".items .prev-slide",
    //     nextSlideItemsBtn = ".items .next-slide";
    // $(document).on('click', prevSlideItemsBtn, function(e){
    //     $('.items .articles-wrap').slick('slickPrev');
    // });
    // $(document).on('click', nextSlideItemsBtn, function(e){
    //     $('.items .articles-wrap').slick('slickNext');
    // });

    /*Слайдер предложений*/
    // $('.offers .articles-wrap').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     nextArrow: '<span class="light_arrow_next"></span>',
    //     prevArrow: '<span class="light_arrow_prev"></span>',
    //     responsive:[
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         }
    //     ]
    // });
    // /*кнопки прокрутки слайдера предложений*/
    // var prevSlideOffersBtn = ".offers .prev-slide",
    //     nextSlideOffersBtn = ".offers .next-slide";
    // $(document).on('click', prevSlideOffersBtn, function(e){
    //     $('.offers .articles-wrap').slick('slickPrev');
    // });
    // $(document).on('click', nextSlideOffersBtn, function(e){
    //     $('.offers .articles-wrap').slick('slickNext');
    // });

    // /*Слайдер покупок*/
    // $('.your-shoppings .articles-wrap').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     nextArrow: '<span class="light_arrow_next"></span>',
    //     prevArrow: '<span class="light_arrow_prev"></span>',
    //     responsive:[
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerMode: true,
    //                 variableWidth: true
    //             }
    //         }
    //     ]
    // });
    // /*кнопки прокрутки слайдера предложений*/
    // var prevSlideShopsBtn = ".your-shoppings .prev-slide",
    //     nextSlideShopsBtn = ".your-shoppings .next-slide";
    // $(document).on('click', prevSlideShopsBtn, function(e){
    //     $('.your-shoppings .articles-wrap').slick('slickPrev');
    // });
    // $(document).on('click', nextSlideShopsBtn, function(e){
    //     $('.your-shoppings .articles-wrap').slick('slickNext');
    // });
    //
    // /*Слайдер рекомендаций*/
    //
    // /*кнопки прокрутки слайдера предложений*/


    userMethods.itemsSlider('.recomends-item');
    userMethods.itemsSlider('.your-shoppings');
    userMethods.itemsSlider('.offers');
    userMethods.itemsSlider('.items');

    /****************************************/
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
    var mainMenuItem = '.main-menu__item'

    //events

    //кнопка .button-item-add
    $(document).on('click', addCartBtn, function(e){
        $(this).toggleClass('active');
    });

    //submenu for phones
    $(document).on('click', mainMenuItem, function(e){
        if (userMethods.isMobile()){
            if($(this).hasClass('active') && !$(e.target).hasClass('main-submenu__link')){
                console.log($(e.target));
                $(this).removeClass('active');
            } else{
                $(mainMenuItem).removeClass('active');
                $(this).addClass('active');
            }
        } else {
            $(mainMenuItem).removeClass('active');
        }
    });



};

var scrollToTop = function(){
    /***вешаем скролтутоп**/
    $(document).ready(function(){
        $('.wrapper').append('<a href="#" class="scroll-to-top" title="Вверх"></a>');
    });

    $(function() {
        $.fn.scrollToTop = function() {
            var height = 1024;
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= height) $(this).fadeIn("slow");
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= height || $(window).scrollTop()+800 >= $(document).height()) $(scrollDiv).fadeOut("slow");
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, 200)
            })
        }
    });

    $(function() {
        $(".scroll-to-top").scrollToTop();
    });
};




//user functions
var userMethods = {
    isMobile: function(){
        if ($(window).width()<1024){
            console.log($(window).width())
            return true;
        } else {
            return false;
            console.log($(window).width())
        }
    },
    itemsSlider: function(item){ //для стандартного слайдера на сайт
        /*Слайдер рекомендаций*/
        $(item).find(' .articles-wrap').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<span class="light_arrow_next"></span>',
            prevArrow: '<span class="light_arrow_prev"></span>',
            responsive:[
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                        centerPadding: '40px',
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true
                    }
                }
            ]
        });

        /**panel buttons***/
        var prevSlideShopsBtn = item + " .prev-slide",
            nextSlideShopsBtn = item + " .next-slide";
        $(document).on('click', prevSlideShopsBtn, function(e){
            $(item).find('.articles-wrap').slick('slickPrev');
        });
        $(document).on('click', nextSlideShopsBtn, function(e){
            $(item).find('.articles-wrap').slick('slickNext');
        });
    }
};


