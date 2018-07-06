var map,aboutAnimationHasRan=!($.fn.isInViewport=function(){var t=$(this).offset().top,e=t+$(this).outerHeight(),n=$(window).scrollTop(),a=n+$(window).height();return n<e&&t<a}),aboutUsAnimationHasRan=!1,valuesAnimationHasRan=!1,headerAnimationHasRan=!1,brandsAnimationHasRan=!1,headerElem=$("#header"),aboutElem=$("#about"),brandsElem=$(".brandlist"),aboutUsElem=$("#aboutUs"),valuesElem=$("#values");function fireAnimations(){if(0<headerElem.length&&headerElem.isInViewport()){var t=$("#header .logo"),e=$("#header h1"),n=$("#header .icon-play");headerAnimationHasRan||(TweenMax.fromTo(t,.5,{css:{y:"-30",opacity:0}},{css:{y:"0",opacity:"1"}}),TweenMax.fromTo(e,.5,{css:{y:"-30",opacity:0}},{css:{y:"0",opacity:"1"},delay:.3}),TweenMax.fromTo(n,.5,{opacity:0,scale:1.5,ease:Bounce.ease},{opacity:1,scale:1}),headerAnimationHasRan=!0)}if(0<headerElem.length&&aboutElem.isInViewport()){var a=$("#about > .left-container"),o=$("#about > .right-container");aboutAnimationHasRan||(TweenMax.fromTo(a,1,{css:{x:"-100",opacity:0}},{css:{x:"0",opacity:"1"},delay:1}),TweenMax.fromTo(o,1,{css:{x:"100",opacity:0}},{css:{x:"0",opacity:"1"},delay:1}),aboutAnimationHasRan=!0)}if(0<aboutUsElem.length&&aboutUsElem.isInViewport()){var i=$(".employee-wrapper");aboutUsAnimationHasRan||(TweenMax.staggerFromTo(i,1,{css:{x:"-100",opacity:0}},{css:{x:"0",opacity:"1"},delay:1},.5),aboutUsAnimationHasRan=!0)}if(0<brandsElem.length&&brandsElem.isInViewport()){var s=brandsElem.find("li");brandsAnimationHasRan||(TweenMax.staggerFromTo(s,.5,{css:{x:"-40",opacity:0}},{css:{x:"0",opacity:"1"},delay:.2},.2),brandsAnimationHasRan=!0)}if(0<valuesElem.length&&valuesElem.isInViewport()){var d=$(".valueItem");valuesAnimationHasRan||($.each(d,function(){var t=$(this).find("strong"),e=(-2.4*Math.random()+2.9).toFixed(2);TweenMax.fromTo(t,1,{css:{x:"-10",opacity:0}},{css:{x:"0",opacity:"1"},delay:e})}),valuesAnimationHasRan=!0)}if(0<aboutUsElem.length&&aboutUsElem.isInViewport()){var c=$(".employee-wrapper");aboutUsAnimationHasRan||(TweenMax.staggerFromTo(c,1,{css:{x:"-100",opacity:0}},{css:{x:"0",opacity:"1"},delay:1},.5),aboutUsAnimationHasRan=!0)}}function getDirection(t,e,n){Math.abs(e-t)<=5||n(e<t?"down":"up",t)}function handleMethodScroll(t){var e="method",n=".fadeIn",a=".method-item",o=".intro",i=".design",s=".tuning",d=".construction";$(n).removeClass(e),$(a).removeClass(e),1===t?($(n+o).addClass(e),$(a+o).addClass(e)):2===t?($(a+o).addClass(e),$(n+i).addClass(e),$(a+i).addClass(e)):3===t?($(a+o).addClass(e),$(a+i).addClass(e),$(n+s).addClass(e),$(a+s).addClass(e)):4===t?($(a+o).addClass(e),$(a+i).addClass(e),$(a+s).addClass(e),$(n+d).addClass(e),$(a+d).addClass(e)):5===t&&($(a+o).addClass(e),$(a+i).addClass(e),$(a+s).addClass(e),$(a+d).addClass(e),$(n+".eval").addClass(e),$(a+".eval").addClass(e))}function setCookie(t,e,n){var a="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),a="; expires="+o.toUTCString()}document.cookie=t+"="+(e||"")+a+"; path=/"}function getCookie(t){for(var e=t+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return null}function eraseCookie(t){document.cookie=t+"=; Max-Age=-99999999;"}function chooseCookie(){var t=navigator.language||navigator.userLanguage,e=getCookie("lang");null!=e&&""!==e||(t.match(/en/g)?setCookie("lang","en",7):t.match(/de/g)?setCookie("lang","en",7):(t.match(/nl/g),setCookie("lang","nl",7))),setTimeout(function(){$("#nav .active-loc").html(getCookie("lang"))},200)}function fixNav(t){var e=$("#nav");500<=t?e.addClass("fixed"):e.removeClass("fixed")}function sliderInit(i){i.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,nextArrow:".icon-arrow-right",prevArrow:".icon-arrow-left",swipeToSlide:!1}),i.on("setPosition",function(t,e,n,a){var o=i.find(".slick-active");o&&(o.on("mousemove",trackLocation),o.on("touchstart",trackLocation),o.on("touchmove",trackLocation))})}function trackLocation(t){var e=$(".slick-active .after"),n=$(".slick-active .before"),a=n[0].getBoundingClientRect(),o=n.outerWidth(),i=(t.pageX-a.left)/o*100;i<=100&&e.css("width",i+"%")}function googleMapsInit(){var t=new google.maps.LatLng(51.372027,6.160478),e={zoom:15,center:t,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,disableDefaultUI:!0,styles:[{featureType:"landscape",stylers:[{visibility:"simplified"},{color:"#2b3f57"},{weight:.1}]},{featureType:"administrative",stylers:[{visibility:"on"},{hue:"#ff0000"},{weight:.4},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{weight:1.3},{color:"#FFFFFF"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:3}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:1.1}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:.4}]},{},{featureType:"road.highway",elementType:"labels",stylers:[{weight:.8},{color:"#ffffff"},{visibility:"on"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{color:"#ffffff"},{weight:.7}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{color:"#6c5b7b"}]},{featureType:"water",stylers:[{color:"#f3b191"}]},{featureType:"transit.line",stylers:[{visibility:"on"}]}]};map=new google.maps.Map(document.getElementById("map-canvas"),e);var n=new google.maps.Marker({position:t,icon:"http://jansmolders.nl/expo-mate/assets/images/marker.png",map:map}),a=new google.maps.InfoWindow({content:$(".contact-details-map").html()});450<$(window).width()&&map.panBy(200,-150),google.maps.event.addListener(n,"click",function(){a.open(map,n)})}$(function(){fireAnimations(),$(window).on("resize scroll",function(){fireAnimations()})}),$(function(){var n=0,a=!1,t=$("#header"),e=$("body.homepage"),o=$(window).height(),i=$(window).width(),s=950,d=0,c=$(".method-item"),l=$(".fadeIn"),r=-1<window.orientation&&screen.width<=640,m=null!=navigator.userAgent.match(/iPad/i),f=$("body").find("[data-content='content-method-hoverLabel']");if($(window).on("mousewheel DOMMouseScroll touchmove",function(){a=!0}),$(window).on("resize",function(){o=$(this).height(),i=$(this).width(),s=$(window).height()/100*20}),void 0!==e&&0<e.length){var h=$("#method"),p=$(".method-scroll-wrapper"),u=h.height(),g=h.offset().top,v=$("#case-studies"),y=~~v.offset().top,b=$("#about"),w=$("#preabout").offset().top,C="active",k="show";(r||m)&&(v.addClass(k),l.addClass(k),b.addClass(k)),$(c).on("mouseenter",function(){var t=$(this).attr("data-item");$(this).addClass("active"),$(".diagram-logo").addClass("hidden"),0<f.length&&f.addClass("hidden"),$(".method-desc."+t).addClass("active"),$("#diagram").addClass(t)}).on("mouseleave",function(){var t=$(this).attr("data-item");$(this).removeClass("active"),$(".diagram-logo").removeClass("hidden"),0<f.length&&f.removeClass("hidden"),$(".method-desc."+t).removeClass("active"),$("#diagram").removeClass(t)}),$(".close-btn").on("click",function(){$("body").toggleClass("isPlaying"),t.removeClass("play"),t.find(".video-container").removeClass("play"),$(".youtube-video-embed iframe").attr("id","").attr("src","")}),$(".play-video-wrapper").on("click",function(){$("body").toggleClass("isPlaying"),t.addClass("play"),t.find(".video-container").addClass("play");$.getJSON("./assets/json/content.json",function(t){var e=t[getCookie("lang")].pages.homepage.header.content;$(".youtube-video-embed iframe").attr("id",e.youtubeURL).attr("src","https://www.youtube.com/embed/"+e.youtubeURL+"?autoplay=0&rel=0&fs=1&enablejsapi=1")})}),$(window).on("scroll",function(){d=~~$(this).scrollTop(),o<1100&&(s=1050),c.removeClass(C),getDirection(d,n,function(t,e){(n=e)&&a&&!r&&1200<i&&!m&&("down"===t?(g<=e&&(l.removeClass(k),p.addClass(k),handleMethodScroll(5)),g+u<=e&&(v.addClass(k),l.removeClass(k),p.removeClass(k)),w<=e&&b.addClass(k)):(v.addClass(k),l.addClass(k),b.addClass(k)),"up"===t&&(e<y-s&&(p.addClass(k),handleMethodScroll(5)),e<=g-100&&l.removeClass(C)))})})}}),chooseCookie(),$(function(){var a=!1,o=$("#nav ul"),i=$(".hamburger"),t=$(window).scrollTop();$("#nav li a").on("click",function(t){t.preventDefault();var e=$(this).attr("href");if(-1!==e.indexOf("."))window.location.href=e;else if($(this).hasClass("loc"))eraseCookie("lang"),setCookie("lang",e,7),window.location.reload();else if(-1!==e.indexOf("#")){var n=$(e).offset().top;$("html, body").animate({scrollTop:n})}a&&(i.removeClass("is-active"),o.removeClass("open"),a=!1)}),i.click(function(){$(this).toggleClass("is-active"),o.toggleClass("open"),a=!0}),$(window).on("scroll",function(){fixNav(~~$(this).scrollTop())}),$(".contact-btn").on("click",function(){var t=$("footer").offset().top;$("html, body").animate({scrollTop:t})}),fixNav(t)}),$(function(){if($("body").hasClass("homepage")){$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t))))[getCookie("lang")].pages.homepage.content.comparison,n=$("#comparison"),a=e.comparisons||"";$.each(a,function(t,e){n.append('<div class="item"><img data-content="content-comparison-before" src="'+e.before+'" class="before" alt>\n<div data-content="content-comparison-after" class="after" style="background-image: url('+e.after+')"></div></div>')}),sliderInit(n)}})}}),$(function(){var g=$("body");$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t))))[getCookie("lang")],n=e.nav.labels,a=e.pages.homepage,o=a.header.content,i=a.content.intro,s=i.images,d=a.content.about,c=a.content.aboutUs,l=a.content.values,r=a.content.comparison,m=a.content.method,f=a.content.model,h=a.content.projects,p=a.footer;if(e&&g.removeClass("loading"),n){var u=$("#nav > ul > li ");u.find('a[href="#preabout"]').html(n.about),u.find('a[href="#method"]').html(n.method),u.find('a[href="#values"]').html(n.values),u.find('a[href="#aboutUs"]').html(n.aboutUs),u.find('a[href="#projects"]').html(n.projects),u.find('a[href="#footer"]').html(n.contact),u.find('a[href="#mission"]').html(n.mission),u.find('a[href="#model"]').html(n.model),u.find('a[href="#foundation"]').html(n.foundation),u.find('a[href="#comparision"]').html(n.comparision)}o&&($(".background-video").css({backgroundImage:o.backgroundImageSrc}),$(".youtube-video-embed iframe").attr("id",o.youtubeURL).attr("src","https://www.youtube.com/embed/"+o.youtubeURL+"?autoplay=0&rel=0&fs=1&enablejsapi=1"),$("video source#mp4").attr("src",o.backgroundVideoMp4Src),$("video source#webm").attr("src",o.backgroundVideoWebMSrc),g.find("[data-content='header-content-title']").html(o.header)),i&&(g.find("[data-content='content-intro-title']").html(i.header),g.find("[data-content='content-intro-desc']").html(i.description),0<$(".brandlist").length&&$.each(s,function(t,e){e.src&&g.find(".brandlist").append('<li><img src="'+e.src+'" alt="'+e.alt+'" /></li>')})),d&&(g.find("[data-content='content-about-row1-title']").html(d.row1.header),g.find("[data-content='content-about-row1-image']").css({backgroundImage:d.row1.image.src}),g.find("[data-content='content-about-row1-desc']").html(d.row1.description),g.find("[data-content='content-about-row2-title']").html(d.row2.header),g.find("[data-content='content-about-row2-image']").css({backgroundImage:d.row2.image.src}),g.find("[data-content='content-about-row2-desc']").html(d.row2.description)),c&&(g.find("[data-content='content-aboutUs-title']").html(c.header),g.find("[data-content='content-aboutUs-description']").html(c.description),g.find("[data-content='content-employee-niek-image']").attr("src",c.employees.niek.image.src).attr("alt",c.employees.niek.image.alt),g.find("[data-content='content-employee-niek-title']").html(c.employees.niek.header),g.find("[data-content='content-employee-niek-desc']").html(c.employees.niek.description),g.find("[data-content='content-employee-jan-image']").attr("src",c.employees.jan.image.src).attr("alt",c.employees.jan.image.alt),g.find("[data-content='content-employee-jan-title']").html(c.employees.jan.header),g.find("[data-content='content-employee-jan-desc']").html(c.employees.jan.description)),l&&(g.find("[data-content='content-values-image']").css({backgroundImage:l.image.src}),g.find("[data-content='content-values-title']").html(l.header),g.find("[data-content='content-values-desc']").html(l.description),g.find("[data-content='content-value1']").html(l.values.value1),g.find("[data-content='content-value2']").html(l.values.value2),g.find("[data-content='content-value3']").html(l.values.value3),g.find("[data-content='content-value4']").html(l.values.value4),g.find("[data-content='content-value5']").html(l.values.value5),g.find("[data-content='content-value6']").html(l.values.value6)),m&&(g.find("[data-content='content-method-title']").html(m.header),g.find("[data-content='content-method-desc']").html(m.description),g.find("[data-content='content-method-hoverLabel']").html(m.hoverLabel),g.find("[data-content='content-method-intro-title']").html(m.methods.intro.header),g.find("[data-content='content-method-intro-desc']").html(m.methods.intro.description),g.find("[data-content='content-method-design-title']").html(m.methods.design.header),g.find("[data-content='content-method-design-desc']").html(m.methods.design.description),g.find("[data-content='content-method-tuning-title']").html(m.methods.tuning.header),g.find("[data-content='content-method-tuning-desc']").html(m.methods.tuning.description),g.find("[data-content='content-method-construction-title']").html(m.methods.construction.header),g.find("[data-content='content-method-construction-desc']").html(m.methods.construction.description),g.find("[data-content='content-method-eval-title']").html(m.methods.eval.header),g.find("[data-content='content-method-eval-desc']").html(m.methods.eval.description)),f&&(g.find("[data-content='content-model-title']").html(f.header),g.find("[data-content='content-model-image']").css({backgroundImage:f.image.src}),g.find("[data-content='content-model-desc']").html(f.description)),h&&(g.find("[data-content='content-projects-title']").html(h.header),g.find("[data-content='content-projects-desc']").html(h.description),g.find("[data-content='content-projects-button']").html(h.button.label),g.find("[data-content='content-project1-image']").attr("src",h.project1.image.src).attr("alt",h.project1.image.alt),g.find("[data-content='content-project1-title']").html(h.project1.header),g.find("[data-content='content-project1-btn']").html(h.project1.button),g.find("[data-content='content-project2-image']").attr("src",h.project2.image.src).attr("alt",h.project2.image.alt),g.find("[data-content='content-project2-title']").html(h.project2.header),g.find("[data-content='content-project2-btn']").html(h.project2.button)),r&&(g.find("[data-content='content-projects-comparison-title']").html(r.header),g.find("[data-content='content-projects-comparison-desc']").html(r.description)),p&&(g.find("[data-content='footer-testimonials-title']").html(p.testimonials.header),g.find("[data-content='footer-contacts-header']").html(p.contacts.header),g.find("[data-content='footer-contacts-jan-title']").html(p.contacts.jan.header),g.find("[data-content='footer-contacts-jan-email']").attr("href",p.contacts.jan.links.email.src).html(p.contacts.jan.links.email.header),g.find("[data-content='footer-contacts-linkedin-jan']").attr("href",p.contacts.jan.links.linkedin.src),g.find("[data-content='footer-contacts-linkedin-jan-title']").html(p.contacts.jan.links.linkedin.header+" "),g.find("[data-content='footer-contacts-call-jan-phone']").attr("href",p.contacts.jan.phone),g.find("[data-content='footer-contacts-niek-title']").html(p.contacts.niek.header),g.find("[data-content='footer-contacts-niek-email']").attr("href",p.contacts.niek.links.email.src).html(p.contacts.niek.links.email.header),g.find("[data-content='footer-contacts-linkedin-niek']").attr("href",p.contacts.niek.links.linkedin.src),g.find("[data-content='footer-contacts-linkedin-niek-title']").html(p.contacts.niek.links.linkedin.header+" "),g.find("[data-content='footer-contacts-call-niek-phone']").attr("href",p.contacts.niek.phone),g.find("[data-content='footer-contacts-phone-header']").html(p.phone.header),g.find("[data-content='footer-contacts-visit-header']").html(p.visit.header),g.find("[data-content='footer-contacts-visit-desc']").html(p.visit.description),g.find("[data-content='footer-copyright-desc']").html(p.copyright.description))}})}),google.maps.event.addDomListener(window,"load",googleMapsInit);var testimonial=$("#google-reviews");function reviewSlider(){testimonial.removeClass("hidden"),testimonial.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,infinite:!1,autoplaySpeed:8e3,arrows:!0})}$(function(){$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t))))[getCookie("lang")].pages.projects;$.each(e,function(t,e){var n=e.review,a=n.author||"",o=n.description||"",i=n.date||"",s=a.replace(/[^A-Z0-9]+/gi,"-").toLowerCase(),d=n.stars||"";n&&void 0!==n&&""!==o&&void 0!==o&&(testimonial.addClass("hidden"),0<testimonial.length&&(testimonial.append('<div class="review" id="'+s+'">\n               <div class="review-author">'+a+'</div>\n               <div class="review-date">'+i+'</div>\n               <div class="review-stars"><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full fifth"></i></div>\n               <div class="review-text">'+n.description+"</div>\n            </div>"),4===d&&$(".review-stars").find(".fifth").remove()))}),setTimeout(function(){reviewSlider()},1e3)}})});