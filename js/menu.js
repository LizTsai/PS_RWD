(function($) {
    $('.push').on('click', function () {
        //console.log("click")
        $('.push').toggleClass(' open');
        if ($('.push').is('.open')) {
         //or  hasClass('.open')
        var end = $('main').offset().top + $('header').height(); 
         //var:宣告變數 offset+top左上角  
        $('.menu').slideDown();
        //.slideUp  .fadeIn  .fadeOut  .show .hide
            setTimeout(function () {
            var ta = $('.menu').offset().top;
            $("html").velocity("scroll", {
                offset: ta
                , duration: 400
                , easing: 'easeInOutSine'
                , mobileHA: false
            });
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > end) {
                    $('.push').removeClass('open');
                    $('.menu').slideUp(400, 'linear', false);
                }
            })
            return false;
        }, 400)
    }
    else {
        $('.menu').slideUp(400, 'linear', false);
    }
    }); //push click 
    
})(jQuery);