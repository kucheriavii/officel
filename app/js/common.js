$(function() {
    sandwich();
	// Custom JS
    if ($(document).height() <= $(window).height())
        $("footer.footer").addClass("navbar-fixed-bottom");
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
