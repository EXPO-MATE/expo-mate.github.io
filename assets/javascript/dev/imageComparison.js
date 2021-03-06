$(function(){
    // Load projects
    if ($('body').hasClass('homepage')){
        var url = './assets/json/content.bin';
        $.ajax({
            url: url,
            scriptCharset: "utf-8",
            type: "GET",
            success: function (data) {
                var actual = JSON.parse(decodeURIComponent(escape(window.atob(data))));
                var loc = getCookie('lang');
                var locData = actual[loc];
                var homepage = locData.pages.homepage;
                var comparison = homepage.content.comparison;
                var comparisonWrapper = $("#comparison");
                var comparisonItem = comparison.comparisons || '';
                $.each(comparisonItem, function (index, item) {
                    comparisonWrapper.append('<div class="item"><img data-content="content-comparison-before" src="' + item.before + '" class="before" alt>\n' +
                        '<div data-content="content-comparison-after" class="after" style="background-image: url(' + item.after + ')"></div></div>');
                });

                setTimeout(function (){
                    comparisonWrapper.not('.slick-initialized').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        nextArrow: '.icon-arrow-right',
                        prevArrow: '.icon-arrow-left',
                        swipeToSlide: false
                    });
                    comparisonWrapper.on('setPosition', function(event, slick, currentSlide, nextSlide){
                        var inkbox = comparisonWrapper.find('.slick-active');
                        if (inkbox) {
                            inkbox.on("mousemove",trackLocation);
                            inkbox.on("touchstart",trackLocation);
                            inkbox.on("touchmove",trackLocation);
                        }
                    });
                },200);
                
            }
        });
    }
});

function trackLocation(e){
    var colorbox = $('.slick-active .after')
        , fillerImage = $('.slick-active .before')
        , rect = fillerImage[0].getBoundingClientRect()
        , fillerImageOw = fillerImage.outerWidth()
        , position = ((e.pageX - rect.left) / fillerImageOw)*100;

    if(position <= 100){
        colorbox.css('width', position+"%");
    }
}

