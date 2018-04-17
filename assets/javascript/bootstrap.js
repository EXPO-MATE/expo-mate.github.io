

// jQuery bootstrap

$(function () {
    //********* Const
    var lastScrollTop = 0
        , hasScrolled = false
        , headerElem = $('#header')
        , isHomePage = $('body.homepage')
        , viewPortHeight = $(window).height()
        , viewPortWidth = $(window).width()
        , animationIncrements = 950
        , step = 0
        , scroll = 0
        , hasSnapped = false
        , navIsOpen = false
        , viewPortOffset = $(window).scrollTop()
        , mobileNav = $('#nav > ul')
        , methodItem = $('.method-item')
        , methodContent = $('.fadeIn')
        , isMobile = window.orientation > -1 && screen.width <= 640
        , hamburgerElem = $('.hamburger')
        , is_iPad = navigator.userAgent.match(/iPad/i) != null;

    fixNav(viewPortOffset);


    //********* Event Handlers


    $('.contact-btn').on('click', function(){
        var footerOffset = $('footer').offset().top;
        $("html, body").animate({ scrollTop: footerOffset });
    });

    $('#nav li a').on('click', function(e){
        e.preventDefault();
        var link = $(this).attr('href');
        if(link.indexOf('.') !== -1) {
            window.location.href = link;
        } else {
            var linkPos = $(link).offset().top;
            $("html, body").animate({ scrollTop: linkPos });
        }

        if (navIsOpen) {
            hamburgerElem.removeClass("is-active");
            mobileNav.removeClass("open");
            navIsOpen = false;
        }
    });

    $(window).on('mousewheel DOMMouseScroll touchmove', function() {
        hasScrolled = true;
    });

    $(window).on('resize', function(){
        viewPortHeight = $(this).height();
        viewPortWidth = $(this).width();
        animationIncrements = $(window).height() / 100 * 20;
    });

    if(isHomePage !== undefined && isHomePage.length > 0){
        var methodContainer = $('#method')
            , methodScrollContainer = $('.method-scroll-wrapper')
            , methodContainerHeight = methodContainer.height()
            , methodContainerOffset = methodContainer.offset().top
            , CaseStudyContainer = $('#case-studies')
            , CaseStudyContainerOffset = ~~CaseStudyContainer.offset().top
            , aboutContainer = $('#about')
            , preAboutContainer = $('#preabout')
            , preAboutContainerOffset = preAboutContainer.offset().top
            , toggleClassName = 'active'
            , visibleClassName = 'show';

        if (methodContainer.visible(true)) {
            methodContainer.addClass(visibleClassName);
        }

        if (aboutContainer.visible(true)) {
            aboutContainer.addClass(visibleClassName);
        }

        if(CaseStudyContainer.visible(true)){
            CaseStudyContainer.addClass(visibleClassName);
        }

        if(isMobile || is_iPad) {
            CaseStudyContainer.addClass(visibleClassName);
            methodContent.addClass(visibleClassName);
            aboutContainer.addClass(visibleClassName);
        }

        $(methodItem).on('mouseenter', function(){
            var item = $(this).attr('data-item');
            $(this).addClass('active');
            $('.fadeIn.'+ item).addClass('active');

        }).on('mouseleave',function(){
            var item = $(this).attr('data-item');
            $(this).removeClass('active');
            $('.fadeIn.'+ item).removeClass('active');
        });

        $('.close-btn').on('click', function(){
            $('body').toggleClass('isPlaying');
            headerElem.removeClass('play');
            headerElem.find('.video-container').removeClass('play');
            $('.youtube-video-embed iframe').attr('id', '').attr('src', '');
        });

        $('.play-video-wrapper').on('click', function(){
            $('body').toggleClass('isPlaying');
            headerElem.addClass('play');
            headerElem.find('.video-container').addClass('play');
            var url = './assets/json/content.json';
            $.getJSON(url, function(data) {
                var loc = getCookie('lang');
                var locData = data[loc];
                var homepage = locData.pages.homepage;
                var header = homepage.header.content;

                $('.youtube-video-embed iframe').attr('id', header.youtubeURL).attr('src', 'https://www.youtube.com/embed/' + header.youtubeURL + '?autoplay=0&rel=0&fs=1&enablejsapi=1')
            });
        });

        hamburgerElem.click(function(){
            $(this).toggleClass("is-active");
            mobileNav.toggleClass("open");
            navIsOpen = true;
        });

        $(window).on('scroll', function(){
            scroll = ~~$(this).scrollTop();

            if(viewPortHeight < 1100){
                animationIncrements = 1050;
            }

            methodItem.removeClass(toggleClassName);

            getDirection(scroll, lastScrollTop, function(direction, scroll){
                lastScrollTop = scroll;

                fixNav(scroll);

                if(scroll && hasScrolled && !isMobile && viewPortWidth > 1200 && !is_iPad) {
                    if(direction === 'down') {
                        //on
                        if (scroll >= methodContainerOffset) {
                            if (!hasSnapped) {
                                methodContent.removeClass(visibleClassName);
                                //methodItem.removeClass('active');
                               // methodScrollContainer.addClass('fixed');
                                methodScrollContainer.addClass(visibleClassName);
                                handleMethodScroll(5);
                            }
                            //hasSnapped = true;
                        }

                        if (scroll >= methodContainerOffset + methodContainerHeight) {
                            CaseStudyContainer.addClass(visibleClassName);
                            methodContent.removeClass(visibleClassName);
                            //methodItem.removeClass('active');
                            //methodScrollContainer.removeClass('fixed');
                            methodScrollContainer.removeClass(visibleClassName);
                            //hasSnapped = false;
                        }

                        if (scroll >= preAboutContainerOffset) {
                            aboutContainer.addClass(visibleClassName);
                        }
                    } else {
                        CaseStudyContainer.addClass(visibleClassName);
                        methodContent.addClass(visibleClassName);
                        aboutContainer.addClass(visibleClassName);
                    }

                    if(direction === 'up') {
                        //on
                        if (scroll < CaseStudyContainerOffset - animationIncrements) {
                            if (!hasSnapped) {
                                //methodItem.removeClass(toggleClassName);
                                //methodScrollContainer.addClass('fixed');
                                methodScrollContainer.addClass(visibleClassName);
                                handleMethodScroll(5);
                            }
                            //hasSnapped = true;
                        }

                        if (scroll <= methodContainerOffset - 100 ) {
                            methodContent.removeClass(toggleClassName);
                            //methodItem.removeClass('active');
                            //methodScrollContainer.removeClass('fixed');
                            //hasSnapped = false;
                        }
                    }

                    if(hasSnapped) {
                        if (scroll > methodContainerOffset && scroll < methodContainerOffset + animationIncrements) {
                            step = 1;
                        } else if (scroll > methodContainerOffset + animationIncrements && scroll < methodContainerOffset + animationIncrements * 2) {
                            step = 2;
                        } else if (scroll > methodContainerOffset + animationIncrements * 2 && scroll < methodContainerOffset + animationIncrements * 3) {
                            step = 3;
                        } else if (scroll > methodContainerOffset + animationIncrements * 3 && scroll < methodContainerOffset + animationIncrements * 4) {
                            step = 4;
                        } else if (scroll > methodContainerOffset + animationIncrements * 4 && scroll < CaseStudyContainerOffset) {
                            step = 5;
                        }

                        handleMethodScroll(step);
                    }

                }
            });
        });
    }
});

function getDirection (scroll, lastScrollTop, callback){
    var direction = null
        , delta = 5;

    if(Math.abs(lastScrollTop - scroll) <= delta) {
        return;
    }

    if (scroll > lastScrollTop){
        direction = 'down';
    } else {
        direction = 'up';
    }
    callback(direction, scroll);
}



function handleMethodScroll(step){
    var toggleClassName = 'method'
        , fadeInElemClass = '.fadeIn'
        , methodElem = '.method-item'
        , introElemClass = '.intro'
        , designElemClass = '.design'
        , tuningElemClass = '.tuning'
        , constructionElemClass = '.construction'
        , evalElemClass = '.eval';

    $(fadeInElemClass).removeClass(toggleClassName);
    $(methodElem).removeClass(toggleClassName);

    if(step === 1){
        $(fadeInElemClass+introElemClass).addClass(toggleClassName);
        $(methodElem+introElemClass).addClass(toggleClassName);
    } else if(step === 2) {
        $(methodElem+introElemClass).addClass(toggleClassName);
        $(fadeInElemClass+designElemClass).addClass(toggleClassName);
        $(methodElem+designElemClass).addClass(toggleClassName);
    } else if(step === 3) {
        $(methodElem+introElemClass).addClass(toggleClassName);
        $(methodElem+designElemClass).addClass(toggleClassName);
        $(fadeInElemClass+tuningElemClass).addClass(toggleClassName);
        $(methodElem+tuningElemClass).addClass(toggleClassName);
    } else if(step === 4) {
        $(methodElem+introElemClass).addClass(toggleClassName);
        $(methodElem+designElemClass).addClass(toggleClassName);
        $(methodElem+tuningElemClass).addClass(toggleClassName);
        $(fadeInElemClass+constructionElemClass).addClass(toggleClassName);
        $(methodElem+constructionElemClass).addClass(toggleClassName);
    } else if(step === 5) {
        $(methodElem+introElemClass).addClass(toggleClassName);
        $(methodElem+designElemClass).addClass(toggleClassName);
        $(methodElem+tuningElemClass).addClass(toggleClassName);
        $(methodElem+constructionElemClass).addClass(toggleClassName);
        $(fadeInElemClass+evalElemClass).addClass(toggleClassName);
        $(methodElem+evalElemClass).addClass(toggleClassName);
    }
}

function fixNav(scroll){
    var nav = $("#nav");
    if (scroll >= 500) {
        nav.addClass("fixed");
    } else {
        nav.removeClass("fixed");
    }
}



/*
function handleImageScroll(scroll, direction){
    var imageScroll = $(".image-scroll-wrapper")
        , foregroundImageOffset = $('.foreground-image').offset().top
        , scrollContainerOffsetTop = imageScroll.offset().top
        , methodContainer = $('#method')
        , methodContainerOffset = methodContainer.offset().top
        , aboutContainer = $('#about')
        , aboutContainerOffset = aboutContainer.offset().top
        , mobileNav = $('#nav ul')
        , hamburgerElem = $('.hamburger');

    if(direction === 'down') {
        //on
        if (scroll > scrollContainerOffsetTop) {
            imageScroll.addClass('fixed');
        }

        //off
        if (foregroundImageOffset === scrollContainerOffsetTop) {
            imageScroll.removeClass('fixed');
        }
    }

    if(direction === 'up') {
        //off
        if (scroll < scrollContainerOffsetTop) {
            imageScroll.removeClass('fixed');
        }
    }

    // show sections
    if (scroll >= methodContainerOffset) {
        methodContainer.addClass('show');
        aboutContainer.removeClass('show');
    }

    if (scroll >= aboutContainerOffset) {
        aboutContainer.addClass('show');
    }
}
*/