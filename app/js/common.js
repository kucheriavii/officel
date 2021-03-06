$(function() {
    sandwich(); //анимация для кнопки меню
	sliders(); //слайдеры
    hovers(); //события ховер на мышь
    setActive(); //активные елементы
    scrollToTop(); //вешаем кнопку прокрутки вверх
    itemCounter(); //счетчик
    itemSlider(); //выбор картинки товара в хедере item.html
    filter(); //фильтер с вспомагательными функциями + боковое меню (по аналогии)
    toolbar();
    itemView(); //переключение вида items на странице categories
    menuFilter(); //фильтер для меню
    popup(); //попапы
    fixedTotal();
    blogListChoose();
    newItemSelect();

});
var newItemSelect = function(){
    $(document).on('click', ".new-item .specefication .articles-header", function(){
        $(".new-item .specefication .articles-header").removeClass("active");
        $(this).addClass("active");
        var name = ($(this).data('test'));
        $(".specefication__list").removeClass("selected");
        console.log(name)
        for(i=0;i<$(".specefication__list").length;i++){
            if($(".specefication__list").eq(i).data("test") == name){
                $(".specefication__list").eq(i).addClass("selected");
            }
        }
    })
    $(document).on('click', ".colors-wrap .color-tool", function(){
        $(".colors-wrap .color-tool").removeClass("selected");
        $(this).addClass("selected");
    })
}
var blogListChoose = function(){
    /*$(".articles__blog-header-choose").text($('.articles__blog-header-form input')[0].value)
    $(".articles__blog-header-form input").on('click', function(){
        console.log(this.value);
        
        $(this).parents(".articles__blog-header-form").find(".articles__blog-header-choose").text(this.value);
        
        if($(this).parents(".articles__blog-header-form").find(".articles__blog-header-form-list").hasClass("active")){
            $(this).parents(".articles__blog-header-form").find(".articles__blog-header-form-list").removeClass("active");
            $(".articles__blog-header-choose").removeClass('choosed');
        }
    })
    $(".articles__blog-header-choose").on('click', function(){
        $(this).addClass('choosed');
        $(this).parents(".articles__blog-header-form").find(".articles__blog-header-form-list").addClass("active")
    })*/
    $('.articles__blog-header-form .articles__blog-header-choose').on('click', function(){
        if(!$('.articles__blog-header-form .articles__blog-header-choose').hasClass('opened')){
            $('.articles__blog-header-form .articles__blog-header-choose').addClass('opened');
            $(".articles__blog-header-form-list").css('display','block');
        } else {
             $('.articles__blog-header-form .articles__blog-header-choose').removeClass('opened');
             $(".articles__blog-header-form-list").css('display','none');
        }
    });
    $(".articles__blog-header-form-list label").on('click', function(){
        $('.articles__blog-header-form .articles__blog-header-choose').removeClass('opened');
        $(".articles__blog-header-form-list").css('display','none');
        $('.articles__blog-header-form .articles__blog-header-choose').text(($(this).text()));
        $(".articles__blog-header-form-list label").removeClass("checked");
        $(this).addClass("checked");
    })
}
var fixedTotal = function(){
    if($('.checkout__page-total').length>0){
        
        var startPositionOfTotalBlock = $('.checkout__page-total').offset().top;
    }

    $(window).scroll(function() {
        if($(window).width()>=1200){ //запускать только при большом екране
            $('.checkout__page-total').css({ //стиль, чтобі не перекрівалось ничем
                'z-index' : 99999
            });
            var totalVerticalPosition = $(window).scrollTop();
            if (totalVerticalPosition>$(document).height()-$(".footer").height()-$('.checkout__page-total').height()-150)
                totalVerticalPosition = $(document).height()-$(".footer").height()-$('.checkout__page-total').height()-210;
            if(totalVerticalPosition<startPositionOfTotalBlock-25)
                totalVerticalPosition = startPositionOfTotalBlock-25;
            $('.checkout__page-total').offset({
                top:totalVerticalPosition+25,
            });
        }
    });
};
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

    /*
    var slidesInHeadItem = $('.header-item__slider-img').length;

    if (slidesInHeadItem > 6 ) slidesInHeadItem = 6;
    $('.header-item__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: slidesInHeadItem,
        //variableWidth: true
    });
    */
    
    var slidesInHeadItem = $('.header-item__slider-img').length;

    if (slidesInHeadItem > 4 ) slidesInHeadItem = 4;
    $('.header-item__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: slidesInHeadItem,
        //variableWidth: true
    });


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
        //console.log($(this).data('src'))
        $('.main-submenu__window-img').attr('src', $(this).data('src'))
    });
};

var setActive = function(){
    //variables

    var addCartBtn = '.button-item-add';
    var mainMenuItem = '.main-menu__item';
    var filterHeader = '.filter .filter__header'; //при нажатии на название групп в фильре сворачывать доппараметры
    var subfilterHeader = '.filter__block .filter__category-name';
    var cabinetToolbarTab = '.cabinet__toolbar-tab';
    var articlesToolbarTab = '.articles__toolbar-tab';
    var cabinetToolbar = '.cabinet__toolbar';
    var articlesBlogSort = '.articles__blog-sort';
    var cabinetPrevOrdersSort = '.cabinet__prev-orders-sort';
    var checkoutInfoWrap = ".checkout__wrap .info";

    var deleteRowItem = '.delete-table-row'
    //events

    //кнопка .button-item-add
    $(document).on('click', addCartBtn, function(e){
        $(this).toggleClass('active');
    });

    //submenu for phones
    $(document).on('click', mainMenuItem, function(e){
        if (userMethods.isMobile()){
            if($(this).hasClass('active') && !$(e.target).hasClass('main-submenu__link')){
                $(this).removeClass('active');
            } else{
                $(mainMenuItem).removeClass('active');
                $(this).addClass('active');
            }
        } else {
            $(mainMenuItem).removeClass('active');
        }
    });

    //гармошки фильтра
    $(document).on('click', filterHeader, function(e){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            if(!$(this).hasClass('active')){
                $(this).parents('.filter__section').find('.filter__block').slideUp(300);
            }
        } else {
            $(this).addClass('active');
            if($(this).hasClass('active')){
                $(this).parents('.filter__section').find('.filter__block').slideDown(300);
            }
        }
    });
    //гармошки подкатегорий фильтра
    $(document).on('click', subfilterHeader, function(e){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            if(!$(this).hasClass('active')){
                $(this).next('.filter__list').slideUp(300);
            }
        } else {
            $(this).addClass('active');
            if($(this).hasClass('active')){
                $(this).next('.filter__list').slideDown(300);
            }
        }
    });

    $(document).on('click', articlesBlogSort, function(e){
        $(this).toggleClass('active');
    });
    //userMethods.tabsCabinet();
    userMethods.tabs(".cabinet");
    userMethods.tabs(".articles");

    /*********************************/
    $(document).on('click',cabinetPrevOrdersSort, function(e){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    })

    /********************************/
    $('.articles__article-comment-reply').on('click', function(e){
        e.preventDefault();

        $('.articles__article-reply-comment').slideToggle();

    })

    $(document).on('click', deleteRowItem, function(e){
        $(this).parents('.cabinet__orders-table--row').remove()
    })

    $(document).on('click',checkoutInfoWrap,function(e){
        $('.checkout__payment-info-popap').toggleClass('active')
    })
    $(document).click(function (e) {
        var container = $(".checkout__payment-info-popap");
        if (e.target!=container[0]&&container.has(e.target).length === 0&&!$(e.target).hasClass('info')){
            container.removeClass('active');
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

var itemCounter = function (){
  var addItem = ".counter-plus",
      removeItem = ".counter-minus",
      counterVal = $(".counter-in").val(),
      counter = $(".counter-in"),
      priceNew = $('.header-item__info-price--new .price-val'),
      priceNewVal =  parseFloat($('.header-item__info-price--new .price-val').text()),
      priceOld = $('.header-item__info-price--old .price-val'),
      priceOldVal =  parseFloat($('.header-item__info-price--old .price-val').text());


  $(document).on('click', addItem, function(e){
      e.preventDefault();
      counter.val(++counterVal);
      var total =  counterVal*priceNewVal;
      priceNew.html(total.toFixed(2));
      var total =  counterVal*priceOldVal;
      priceOld.html(total.toFixed(2));
  });
  $(document).on('click', removeItem, function(e){
      e.preventDefault();
      counterVal>1?counter.val(--counterVal):counter.val(1);
      var total =  counterVal*priceNewVal;
      priceNew.html(total.toFixed(2));
      var total =  counterVal*priceOldVal;
      priceOld.html(total.toFixed(2));
  });

};

var itemSlider = function(){
  var img = $('.header-item__main-pic img'),
      sliderItem = '.header-item__slider-slide';

   /* $(document).on('click', sliderItem, function(e){
        var src = $(this).find('img').attr('src');
        img.attr('src', src);
        $(sliderItem).removeClass('bordered');
        console.log($(this));
        $(this).addClass('bordered');
    });*/

    var items = $('.header-item__slider-slide img').clone();

    /*собираем все картинки со слайдера item.html и клонируем их в бокс для отображения большой картинки*/
    $('.header-item__main-pic img').remove();
    items.appendTo('.header-item__main-pic');
    $('.header-item__main-pic img').wrap(function() {
        return "<a href='" + $( this ).data('original-src') + "' class='temp-popup'></a>";
    });
    $('.temp-popup').eq(0).css('display','block');
    $('.header-item__main-pic .temp-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        // other options
    });





    $(document).on('click', sliderItem, function(e){
        var src = $(this).find('img').attr('src');
        var sliderTarget = $(this).index('.header-item__slider-slide');

        $('.temp-popup').removeAttr('style');
        $('.temp-popup').eq(sliderTarget).css('display','block')

        img.attr('src', src);
        $(sliderItem).removeClass('bordered');

        $(this).addClass('bordered');
    });
};

var filter = function(){
  //пробегаем по фильтре и смотрим какие хедеры активные
  //отображаем нужные фильтры
  var filterHeader = ".filter__header" ;
  for (var i = 0; i<filterHeader.length; i++){
      if($(filterHeader).eq(i).hasClass('active')){
          $(filterHeader).eq(i).parents('.filter__section').find('.filter__block').css('display','block');
      }
  }
  //пробегаем по подфильтре и смотрим какие хедеры активные
  //отображаем нужные фильтры
  var subfilterHeader = ".filter__category-name" ;
  for (var i = 0; i<filterHeader.length; i++){
      if($(subfilterHeader).eq(i).hasClass('active')){
          $(subfilterHeader).eq(i).next('.filter__list').css('display','block');
      }
  }
};

var toolbar = function(){
    var menuSectionHead = '.menubar__section-name';
    var menuSection = '.menubar__section-menu';
    var menuCategories = '.menubar__categories';
    var menuCategoriesHead = ".menubar__categories-name";
    var menuList = ".menubar__menu-list";

    for (var i=0; i<menuSectionHead.length; i++){
        if ($(menuSectionHead).eq(i).hasClass('active')){
            var howManyShow = $(menuSectionHead).eq(i).parents('.menubar__section-menu').find(menuCategories).data('show');
            $(menuSectionHead).eq(i).parents('.menubar__section-menu').find(menuCategories).css('display','block');
            $(menuSectionHead).eq(i).parents('.menubar__section-menu').find('.menubar__category').slice(howManyShow).addClass('unactive');
            $(menuSectionHead).eq(i).parents('.menubar__section-menu').find('.menubar__section-all').css('display','block');

        } else {
            $(menuSectionHead).eq(i).parents('.menubar__section-menu').find(menuCategories).css('display','none');
            var howManyShow = $(menuSectionHead).eq(i).parents('.menubar__section-menu').find(menuCategories).data('show');
            $(menuSectionHead).eq(i).parents('.menubar__section-menu').find('.menubar__category').slice(howManyShow).addClass('unactive');
        }

    }
    for (var i=0; i<menuCategoriesHead.length; i++){
        if ($(menuCategoriesHead).eq(i).hasClass('active')){
            $(menuCategoriesHead).eq(i).parents('.menubar__category').find(menuList).css('display','block');
        } else {
            $(menuCategoriesHead).eq(i).parents('.menubar__category').find(menuList).css('display','none');
        }
    }

    /*Section*/
    $(document).on('click', menuSectionHead, function(){
        if($(this).hasClass('active')){
            $(this).parents('.menubar__section-menu').find(menuCategories).slideUp();
            $(this).parents('.menubar__section-menu').find('.menubar__section-all').css('display','none');
            $(this).removeClass('active')
        } else {
            $(this).parents('.menubar__section-menu').find(menuCategories).slideDown();
            $(this).parents('.menubar__section-menu').find('.menubar__section-all').css('display','block');
            $(this).addClass('active')
        }
    });

    /*Categories*/
    $(document).on('click', menuCategoriesHead, function(){
        if($(this).hasClass('active')){
            $(this).parents('.menubar__category').find(menuList).slideUp();
            $(this).removeClass('active');
            console.log('in')
        } else {
            console.log('else')
            $(this).parents('.menubar__category').find(menuList).slideDown();
            $(this).addClass('active');
        }
    });

    /*Скрывать определенное количество пунктов меню (передается в дата)*/
    $(document).on('click', '.menubar__section-all', function(e){
        e.preventDefault();
        if(!$(this).hasClass('opened')){
            $(this).parents('.menubar__section-menu').find('.unactive').slideDown().removeClass('unactive');
            $(this).text('Hide categories').addClass('opened')
        } else {
            var howManyShow = $(this).parents('.menubar__section-menu').find(menuCategories).data('show');
            $(this).parents('.menubar__section-menu').find('.menubar__category').slice(howManyShow).slideUp().addClass('unactive');
            $(this).text('View all').removeClass('opened')
        }
    })
};

var itemView = function(){
    var lineView = '.show-line';
    var squareView = '.show-square';
    $(lineView).on('click', function(){
        $('.items-catalog__wrap').addClass('line-view');
    });
    $(squareView).on('click', function(){
        $('.items-catalog__wrap').removeClass('line-view');
    });
};

var menuFilter = function(){
    var mobileFilterButton = $("<button class='mobile-filter-button'></button>");
    mobileFilterButton.insertBefore('.filter, .menubar');

    $(document).on('click', '.mobile-filter-button', function(){
        if($('.filter, .menubar').hasClass('active')){
            $('.filter, .menubar').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.filter, .menubar').addClass('active');
            $(this).addClass('active')
        }
    })
};

//popups
function popup(){
    var editUserData = ".checkout__contacts-button";

    $(document).on('click', editUserData, function(e){
        console.log("in progress...")
        $('.edit_user_data').css('display','flex');
    });

    $(document).on('click', '.popup-content button', function(){
        $('.edit_user_data').css('display','none');
    });

    $(document).on('click', '.popup .close', function(){
        $('.edit_user_data').css('display','none');
    });

    $(document).click(function (e) {
        var container = $(".popup");
        if (e.target!=container[0]&&container.has(e.target).length === 0 && container.is(':visible')){
            console.log('hide')
        }
    });

};
//user functions
var userMethods = {
    isMobile: function(){
        if ($(window).width()<1024){
           // console.log($(window).width())
            return true;
        } else {
            return false;
            //console.log($(window).width())
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
    },
    tabs: function(tabs){
        var cabinetToolbarTab = tabs+'__toolbar-tab';

        
        //табы в личном кабинете
        $(document).on('click',tabs+'__toolbar-tab '+tabs+'__toolbar-header', function(e){
            if(!$(this).parents(tabs+'__toolbar-tab').hasClass('active')){
                $(cabinetToolbarTab).removeClass('active');
                $(cabinetToolbarTab).children('ul').find('li').removeClass('active');
                $(cabinetToolbarTab).children('ul').slideUp(300);
                $(this).parents(tabs+'__toolbar-tab').addClass('active');
                if($(this).parents(tabs+'__toolbar-tab').hasClass('active')){
                    $(this).parents(tabs+'__toolbar-tab').children('ul').slideDown(300);
                    $(this).parents(tabs+'__toolbar-tab').children('ul').find('li').eq(0).trigger('click')
                }
            }
        });
        //табы в личном кабинете
        $(document).on('click',tabs+'__toolbar ul li', function(e){
            $(tabs+'__toolbar ul li').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on('click', cabinetToolbarTab, function(e){
            e.stopPropagation();
            console.log($(e.target));
            $(tabs+'__article').css('display','none');
            var toolbarTab = $(this).data('toolbar-tab');
            $('.'+toolbarTab).css('display', 'block')
        });
        $(document).on('click', tabs+'__toolbar-submenu-tab', function(e){
            e.stopPropagation();
            $(tabs+'__article').css('display','none');
            var toolbarTab = $(this).data('toolbar-tab');
            console.log(toolbarTab)
            $('.'+toolbarTab).css('display', 'block');
        });
        $(document).on('click',tabs+'__orders-table--detail-btn .button', function(){
            $(tabs+'__article').css('display','none');
            $(tabs+'__order-details').css('display','block');
        });
        $(document).on('click',tabs+'__order-button-back', function(){
            $(tabs+'__article').css('display','none');
            $(tabs+'__orders').css('display','block');
        });
    }
};




