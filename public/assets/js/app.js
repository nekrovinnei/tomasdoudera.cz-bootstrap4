
jQuery.noConflict();

(function ($) {

    $(document).ready(function () {
        
        
        /**
         * SCROLL SPY
         * ------------------------------------------------------------------------
         */
        
        // Get section links
        var allLinks = $('.nav .section-link').map( function() {
            return $(this).attr('href');
        }).get();
        
        // Check section and add attr active on link 
        function scrollSpy() {

            var current;

            for (var i = 0; i < allLinks.length; i++) {
                if ($( allLinks[i] ).offset().top <= $(window).scrollTop() + 72 ) {
                    current = allLinks[i];
                    console.log(current);
                }
            }

            $("nav a[href='" + current + "']")
                    .addClass('active')
                    .parent()
                    .addClass('active');
            
            $("nav a").not("a[href='" + current + "']")
                    .removeClass('active')
                    .parent()
                    .removeClass('active');
        }

        // Smooth scrolling navigation
        $("nav a,.btn-back").click(function () {
            var target = $(this).attr("href");
            $("body, html").animate({
                scrollTop: $(target).offset().top
            }, 300);
            return false;
        });

        // ScrollSpy call
        $(document).ready(function () {
            scrollSpy();
        });
        // ScrollSpy call
        $(window).scroll(function () {
            scrollSpy();
        });
        
        
        /**
         * MENU
         * ------------------------------------------------------------------------
         */
        
        $(".menu-icon").click(function () {
            $("header .nav-wrapper").toggleClass("menu-active");
        });
        
    });

})(jQuery);

