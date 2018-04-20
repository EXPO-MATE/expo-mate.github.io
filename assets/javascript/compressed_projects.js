function getDirection(t,e,n){Math.abs(e-t)<=5||n(t>e?"down":"up",t)}function handleMethodScroll(t){var e="method",n=".fadeIn",a=".method-item",o=".intro",i=".design",s=".tuning",l=".construction";$(n).removeClass(e),$(a).removeClass(e),1===t?($(n+o).addClass(e),$(a+o).addClass(e)):2===t?($(a+o).addClass(e),$(n+i).addClass(e),$(a+i).addClass(e)):3===t?($(a+o).addClass(e),$(a+i).addClass(e),$(n+s).addClass(e),$(a+s).addClass(e)):4===t?($(a+o).addClass(e),$(a+i).addClass(e),$(a+s).addClass(e),$(n+l).addClass(e),$(a+l).addClass(e)):5===t&&($(a+o).addClass(e),$(a+i).addClass(e),$(a+s).addClass(e),$(a+l).addClass(e),$(n+".eval").addClass(e),$(a+".eval").addClass(e))}function fixNav(t){var e=$("#nav");t>=500?e.addClass("fixed"):e.removeClass("fixed")}function setCookie(t,e,n){var a="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),a="; expires="+o.toUTCString()}document.cookie=t+"="+(e||"")+a+"; path=/"}function getCookie(t){for(var e=t+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return null}function eraseCookie(t){document.cookie=t+"=; Max-Age=-99999999;"}function chooseCookie(){var t=navigator.language||navigator.userLanguage,e=getCookie("lang");null!=e&&""!==e||(t.match(/en/g)?setCookie("lang","en",7):t.match(/de/g)?setCookie("lang","en",7):(t.match(/nl/g),setCookie("lang","nl",7))),setTimeout(function(){$("#nav .active-loc").html(getCookie("lang"))},200)}var map;function googleMapsInit(){var t=new google.maps.LatLng(51.372027,6.160478),e={zoom:15,center:t,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,disableDefaultUI:!0,styles:[{featureType:"landscape",stylers:[{visibility:"simplified"},{color:"#2b3f57"},{weight:.1}]},{featureType:"administrative",stylers:[{visibility:"on"},{hue:"#ff0000"},{weight:.4},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{weight:1.3},{color:"#FFFFFF"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:3}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:1.1}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:.4}]},{},{featureType:"road.highway",elementType:"labels",stylers:[{weight:.8},{color:"#ffffff"},{visibility:"on"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{color:"#ffffff"},{weight:.7}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{color:"#6c5b7b"}]},{featureType:"water",stylers:[{color:"#f3b191"}]},{featureType:"transit.line",stylers:[{visibility:"on"}]}]};map=new google.maps.Map(document.getElementById("map-canvas"),e);var n=new google.maps.Marker({position:t,icon:"http://jansmolders.nl/expo-mate/assets/images/marker.png",map:map}),a=new google.maps.InfoWindow({content:$(".contact-details-map").html()});$(window).width()>450&&map.panBy(200,-150),google.maps.event.addListener(n,"click",function(){a.open(map,n)})}function sliderInit(t){"string"==typeof t&&$("#"+t+" .slider").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,arrows:!0})}$(function(){var t=0,e=!1,n=$("#header"),a=$("body.homepage"),o=$(window).height(),i=$(window).width(),s=950,l=0,r=!1,d=$(window).scrollTop(),c=$("#nav > ul"),p=$(".method-item"),m=$(".fadeIn"),f=window.orientation>-1&&screen.width<=640,h=$(".hamburger"),g=null!=navigator.userAgent.match(/iPad/i);if(fixNav(d),$(".contact-btn").on("click",function(){var t=$("footer").offset().top;$("html, body").animate({scrollTop:t})}),$("#nav li a").on("click",function(t){t.preventDefault();var e=$(this).attr("href");if(-1!==e.indexOf("."))window.location.href=e;else{var n=$(e).offset().top;$("html, body").animate({scrollTop:n})}r&&(h.removeClass("is-active"),c.removeClass("open"),r=!1)}),$(window).on("mousewheel DOMMouseScroll touchmove",function(){e=!0}),$(window).on("resize",function(){o=$(this).height(),i=$(this).width(),s=$(window).height()/100*20}),void 0!==a&&a.length>0){var u=$("#method"),v=$(".method-scroll-wrapper"),y=u.height(),w=u.offset().top,b=$("#case-studies"),C=~~b.offset().top,k=$("#about"),j=$("#preabout").offset().top,T="active",x="show";u.visible(!0)&&u.addClass(x),k.visible(!0)&&k.addClass(x),b.visible(!0)&&b.addClass(x),(f||g)&&(b.addClass(x),m.addClass(x),k.addClass(x)),$(p).on("mouseenter",function(){var t=$(this).attr("data-item"),e=$("body").find("[data-content='content-method-hoverLabel']");$(this).addClass("active"),e.addClass("hidden"),$(".fadeIn."+t).addClass("active")}).on("mouseleave",function(){var t=$(this).attr("data-item"),e=$("body").find("[data-content='content-method-hoverLabel']");$(this).removeClass("active"),e.removeClass("hidden"),$(".fadeIn."+t).removeClass("active")}),$(".close-btn").on("click",function(){$("body").toggleClass("isPlaying"),n.removeClass("play"),n.find(".video-container").removeClass("play"),$(".youtube-video-embed iframe").attr("id","").attr("src","")}),$(".play-video-wrapper").on("click",function(){$("body").toggleClass("isPlaying"),n.addClass("play"),n.find(".video-container").addClass("play");$.getJSON("./assets/json/content.json",function(t){var e=t[getCookie("lang")].pages.homepage.header.content;$(".youtube-video-embed iframe").attr("id",e.youtubeURL).attr("src","https://www.youtube.com/embed/"+e.youtubeURL+"?autoplay=0&rel=0&fs=1&enablejsapi=1")})}),h.click(function(){$(this).toggleClass("is-active"),c.toggleClass("open"),r=!0}),$(window).on("scroll",function(){l=~~$(this).scrollTop(),o<1100&&(s=1050),p.removeClass(T),getDirection(l,t,function(n,a){t=a,fixNav(a),a&&e&&!f&&i>1200&&!g&&("down"===n?(a>=w&&(m.removeClass(x),v.addClass(x),handleMethodScroll(5)),a>=w+y&&(b.addClass(x),m.removeClass(x),v.removeClass(x)),a>=j&&k.addClass(x)):(b.addClass(x),m.addClass(x),k.addClass(x)),"up"===n&&(a<C-s&&(v.addClass(x),handleMethodScroll(5)),a<=w-100&&m.removeClass(T)))})})}}),$(function(){var t=!1,e=$("#nav ul"),n=$(".hamburger");$("#nav li a").on("click",function(a){a.preventDefault();var o=$(this).attr("href");if("#footer"===o){var i=$(o).offset().top;$("html, body").animate({scrollTop:i})}else window.location.href="/"+o;t&&(n.removeClass("is-active"),e.removeClass("open"))}),n.click(function(){$(this).toggleClass("is-active"),e.toggleClass("open"),t=!0})}),function(t){var e="googlePlaces";t.googlePlaces=function(a,o){var i={placeId:"ChIJN1t_tDeuEmsRUsoyG83frY4",render:["reviews"],min_rating:0,max_rows:0,map_plug_id:"map-plug",rotateTime:!1,schema:{displayElement:"#schema",type:"Store",beforeText:"Google Users Have Rated",middleText:"based on",afterText:"ratings and reviews"},address:{displayElement:"#google-address"},phone:{displayElement:"#google-phone"},staticMap:{displayElement:"#google-static-map",width:512,height:512,zoom:17,type:"roadmap"},hours:{displayElement:"#google-hours"}},s=this;s.settings={};var l=t(a);a=a;s.init=function(){s.settings=t.extend({},i,o),s.settings.schema=t.extend({},i.schema,o.schema),l.html("<div id='"+s.settings.map_plug_id+"'></div>"),d(function(t){s.place_data=t,l.trigger("beforeRender."+e),s.settings.render.indexOf("rating")>-1&&c(s.place_data.rating),s.settings.render.indexOf("reviews")>-1&&(p(s.place_data.reviews),s.settings.rotateTime&&u()),s.settings.render.indexOf("address")>-1&&h(r(s.settings.address.displayElement),s.place_data.adr_address),s.settings.render.indexOf("phone")>-1&&g(r(s.settings.phone.displayElement),s.place_data.formatted_phone_number),s.settings.render.indexOf("staticMap")>-1&&f(r(s.settings.staticMap.displayElement),s.place_data.formatted_address),s.settings.render.indexOf("hours")>-1&&m(r(s.settings.hours.displayElement),s.place_data.opening_hours),$(r(s.settings.schema.displayElement),s.place_data),l.trigger("afterRender."+e)})};var r=function(e){if(e instanceof jQuery)return e;if("string"==typeof e)try{var n=t(e);if(n.length)return n;throw"Element ["+e+"] couldnt be found in the DOM. Skipping "+e+" markup generation."}catch(t){console.warn(t)}},d=function(t){var e=new google.maps.Map(document.getElementById(s.settings.map_plug_id)),n={placeId:s.settings.placeId};new google.maps.places.PlacesService(e).getDetails(n,function(e,n){n==google.maps.places.PlacesServiceStatus.OK&&t(e)})},c=function(t){var e;e="<div class='average-rating'><h4>"+y(t)+"</h4></div>",l.append(e)},p=function(t){var e;(e=t).sort(function(t,e){var n=new Date(t.time),a=new Date(e.time);return n<a?-1:n>a?1:0}),t=function(t){for(var e=t.length-1;e>=0;e--)t[e].rating<s.settings.min_rating&&t.splice(e,1);return t}(t=e);for(var a="",o=s.settings.max_rows>0?s.settings.max_rows-1:t.length-1,i=o=o>t.length-1?t.length-1:o;i>=0;i--){var r=v(t[i].rating),d=w(t[i].time),c=t[i].author_name,p=",";void 0===c&&(c="",p=""),a=a+"<div class='review-item'><div class='review-meta'><span class='review-author'>"+n(c)+"</span><span class='review-sep'>"+p+"</span><span class='review-date'>"+d+"</span></div>"+r+"<p class='review-text'>"+t[i].text+"</p></div>"}l.append(a)},m=function(t,e){if(t instanceof jQuery){var n="<ul>";e.weekday_text.forEach(function(t){n+="<li>"+t+"</li>"}),n+="</ul>",t.append(n)}},f=function(t,e){if(t instanceof jQuery){var n=s.settings.staticMap;t.append("<img src='https://maps.googleapis.com/maps/api/staticmap?size="+n.width+"x"+n.height+"&zoom="+n.zoom+"&maptype="+n.type+"&markers=size:large%7Ccolor:red%7C"+e+"'></img>")}},h=function(t,e){t instanceof jQuery&&t.append(e)},g=function(t,e){t instanceof jQuery&&t.append(e)},u=function(){var e=l.children(".review-item"),n=e.length>0&&0;e.hide(),!1!==n&&(t(e[n]).show(),setInterval(function(){++n>=e.length&&(n=0),e.hide(),t(e[n]).fadeIn("slow")},s.settings.rotateTime))},v=function(t){for(var e="<div class='review-stars'><ul>",n=0;n<t;n++)e+="<li><i class='star'></i></li>";if(t<5)for(n=0;n<5-t;n++)e+="<li><i class='star inactive'></i></li>";return e+="</ul></div>"},y=function(t){for(var e="<div class='review-stars'><ul><li><i>"+t+"&nbsp;</i></li>",n=parseInt(t),a=5-n,o=100*(t-n)+"%",i=0;i<n;i++)e+="<li><i class='star'></i></li>";if(a>0)for(i=0;i<a;i++)e+=0===i?"<li style='position: relative;'><i class='star inactive'></i><i class='star' style='position: absolute;top: 0;left: 0;overflow: hidden;width: "+o+"'></i></li>":"<li><i class='star inactive'></i></li>";return e+="</ul></div>"},w=function(t){var e=new Date(1e3*t);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()},$=function(t,e){for(var n=e.reviews,a=n.length-1,o=0,i=s.settings.schema,l=a;l>=0;l--)o+=n[l].rating;var r=o/n.length;t instanceof jQuery&&t.append('<span itemscope="" itemtype="http://schema.org/'+i.type+'"><meta itemprop="url" content="'+location.origin+'">'+i.beforeText+' <span itemprop="name">'+e.name+'</span> <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"><span itemprop="ratingValue">'+r.toFixed(2)+'</span>/<span itemprop="bestRating">5</span> '+i.middleText+' <span itemprop="ratingCount">'+n.length+"</span> "+i.afterText+"</span></span>")};s.init()};var n=function(t){if(t.split(" ").length>1){var e;return(e=t.split(" "))[0]+" "+e[1][0]+"."}return t};t.fn.googlePlaces=function(n){return this.each(function(){if(null==t(this).data(e)){var a=new t.googlePlaces(this,n);t(this).data(e,a)}})}}(jQuery),$(function(){chooseCookie(),$("#nav li .loc").on("click",function(t){t.preventDefault();var e=$(this).attr("href");eraseCookie("lang"),setCookie("lang",e,7),window.location.reload()});var t=$("body");$.getJSON("./assets/json/content.json",function(e){var n=e[getCookie("lang")],a=n.nav.labels,o=n.pages.homepage,i=o.header.content,s=o.content.intro,l=s.images,r=o.content.about,d=o.content.aboutUs,c=o.content.values,p=o.content.method,m=o.content.model,f=o.content.projects,h=o.footer;if(n&&t.removeClass("loading"),a){var g=$("#nav > ul > li ");g.find('a[href="#preabout"]').html(a.about),g.find('a[href="#method"]').html(a.method),g.find('a[href="#values"]').html(a.values),g.find('a[href="#case-studies"]').html(a.projects),g.find('a[href="#footer"]').html(a.contact),g.find('a[href="#mission"]').html(a.mission),g.find('a[href="#model"]').html(a.model),g.find('a[href="#foundation"]').html(a.foundation),g.find('a[href="#comparision"]').html(a.comparision)}i&&($(".background-video").css({backgroundImage:i.backgroundImageSrc}),$(".youtube-video-embed iframe").attr("id",i.youtubeURL).attr("src","https://www.youtube.com/embed/"+i.youtubeURL+"?autoplay=0&rel=0&fs=1&enablejsapi=1"),$("video source#mp4").attr("src",i.backgroundVideoMp4Src),$("video source#webm").attr("src",i.backgroundVideoWebMSrc),t.find("[data-content='header-content-title']").html(i.title)),s&&(t.find("[data-content='content-intro-title']").html(s.title),t.find("[data-content='content-intro-desc']").html(s.description),$(".brandlist").length>0&&$.each(l,function(e,n){n.src&&t.find(".brandlist").append('<li><img src="'+n.src+'" alt="'+n.alt+'" /></li>')})),r&&(t.find("[data-content='content-about-row1-title']").html(r.row1.title),t.find("[data-content='content-about-row1-image']").css({backgroundImage:r.row1.image.src}),t.find("[data-content='content-about-row1-desc']").html(r.row1.description),t.find("[data-content='content-about-row2-title']").html(r.row2.title),t.find("[data-content='content-about-row2-image']").css({backgroundImage:r.row2.image.src}),t.find("[data-content='content-about-row2-desc']").html(r.row2.description)),d&&(t.find("[data-content='content-aboutUs-title']").html(d.title),t.find("[data-content='content-aboutUs-description']").html(d.description),t.find("[data-content='content-employee-niek-image']").attr("src",d.employees.niek.image.src).attr("alt",d.employees.niek.image.alt),t.find("[data-content='content-employee-niek-title']").html(d.employees.niek.title),t.find("[data-content='content-employee-niek-desc']").html(d.employees.niek.description),t.find("[data-content='content-employee-jan-image']").attr("src",d.employees.jan.image.src).attr("alt",d.employees.jan.image.alt),t.find("[data-content='content-employee-jan-title']").html(d.employees.jan.title),t.find("[data-content='content-employee-jan-desc']").html(d.employees.jan.description)),c&&(t.find("[data-content='content-values-image']").css({backgroundImage:c.image.src}),t.find("[data-content='content-values-title']").html(c.title),t.find("[data-content='content-values-desc']").html(c.description),t.find("[data-content='content-value1']").html(c.values.value1),t.find("[data-content='content-value2']").html(c.values.value2),t.find("[data-content='content-value3']").html(c.values.value3),t.find("[data-content='content-value4']").html(c.values.value4),t.find("[data-content='content-value5']").html(c.values.value5),t.find("[data-content='content-value6']").html(c.values.value6)),p&&(t.find("[data-content='content-method-title']").html(p.title),t.find("[data-content='content-method-desc']").html(p.description),t.find("[data-content='content-method-hoverLabel']").html(p.hoverLabel),t.find("[data-content='content-method-intro-title']").html(p.method.intro.title),t.find("[data-content='content-method-intro-desc']").html(p.method.intro.description),t.find("[data-content='content-method-design-title']").html(p.method.design.title),t.find("[data-content='content-method-design-desc']").html(p.method.design.description),t.find("[data-content='content-method-tuning-title']").html(p.method.tuning.title),t.find("[data-content='content-method-tuning-desc']").html(p.method.tuning.description),t.find("[data-content='content-method-construction-title']").html(p.method.construction.title),t.find("[data-content='content-method-construction-desc']").html(p.method.construction.description),t.find("[data-content='content-method-eval-title']").html(p.method.eval.title),t.find("[data-content='content-method-eval-desc']").html(p.method.eval.description)),m&&(t.find("[data-content='content-model-title']").html(m.title),t.find("[data-content='content-model-image']").css({backgroundImage:m.image.src}),t.find("[data-content='content-model-desc']").html(m.description)),f&&(t.find("[data-content='content-projects-title']").html(f.title),t.find("[data-content='content-projects-desc']").html(f.description),t.find("[data-content='content-projects-quote']").html(f.quote),t.find("[data-content='content-projects-author']").html(f.author),t.find("[data-content='content-projects-button']").html(f.button.label),t.find("[data-content='content-projects-comparisonHeader']").html(f.comparisonHeader),t.find("[data-content='content-project1-image']").attr("src",f.project1.image.src).attr("alt",f.project1.image.alt),t.find("[data-content='content-project1-title']").html(f.project1.title),t.find("[data-content='content-project1-btn']").html(f.project1.button),t.find("[data-content='content-project2-image']").attr("src",f.project2.image.src).attr("alt",f.project2.image.alt),t.find("[data-content='content-project2-title']").html(f.project2.title),t.find("[data-content='content-project2-btn']").html(f.project2.button)),h&&(t.find("[data-content='footer-testimonials-title']").html(h.testimonials.title),t.find("[data-content='footer-contacts-header']").html(h.contacts.header),t.find("[data-content='footer-contacts-jan-title']").html(h.contacts.jan.title),t.find("[data-content='footer-contacts-jan-email']").attr("href",h.contacts.jan.links.email.src).html(h.contacts.jan.links.email.title),t.find("[data-content='footer-contacts-linkedin-jan']").attr("href",h.contacts.jan.links.linkedin.src),t.find("[data-content='footer-contacts-linkedin-jan-title']").attr("href",h.contacts.jan.links.linkedin.title),t.find("[data-content='footer-contacts-call-jan-phone']").attr("href",h.contacts.jan.phone),t.find("[data-content='footer-contacts-niek-title']").html(h.contacts.niek.title),t.find("[data-content='footer-contacts-niek-email']").attr("href",h.contacts.niek.links.email.src).html(h.contacts.niek.links.email.title),t.find("[data-content='footer-contacts-linkedin-niek']").attr("href",h.contacts.niek.links.linkedin.src),t.find("[data-content='footer-contacts-linkedin-niek-title']").attr("href",h.contacts.niek.links.linkedin.title),t.find("[data-content='footer-contacts-call-niek-phone']").attr("href",h.contacts.niek.phone),t.find("[data-content='footer-contacts-phone-header']").attr("href",h.phone.header),t.find("[data-content='footer-contacts-visit-header']").attr("href",h.visit.header),t.find("[data-content='footer-contacts-visit-desc']").attr("href",h.visit.description),t.find("[data-content='footer-copyright-desc']").attr("href",h.copyright.description))})}),google.maps.event.addDomListener(window,"load",googleMapsInit),$(function(){var t=$("#google-reviews");0!==t.length&&t.googlePlaces({placeId:"ChIJt6JxUkxFx0cRWTzXobLcYGw",render:["reviews"],min_rating:4,max_rows:5,rotateTime:5e3})}),$(function(){if($("body").hasClass("projects")){var t=window.location.hash;$.getJSON("./assets/json/content.json",function(e){var n=e[getCookie("lang")].pages.projects,a=$("#projects .projects-wrapper");$.each(n,function(e,n){var o=[],i=n.images,s=parseInt(e)+1;if(i&&i.length>0&&$.each(i,function(t,e){e&&o.push('<div class="project-image" style="background-image: url('+e.src+')"></div>')}),a.append('<div class="project" id="project'+s+'">\n               <div class="project-close"></div>\n               <div class="project-images">\n                  <div class="slider">'+o.join("")+'</div>\n               </div>\n               <div class="project-desc-wrapper">\n                  <div class="project-desc-content">\n                      <div class="project-header">\n                          <h2 class="project-title">'+n.title+'</h2>\n                          <div class="project-sub-title">'+n.subTitle+'</div>\n                      </div>\n                      <div class="project-desc">'+n.description+"</div>\n                  </div>               </div>            </div>"),$(".project-images").on("click",function(){if(!$("body").hasClass("open")){$(this).parent(".project").addClass("open");var t=$(this).parent(".project").attr("id");document.location.href="#"+t,$("body").addClass("open"),sliderInit(t)}}),$(".project-title").on("click",function(){if(!$("body").hasClass("open")){var t=$(this).parent().parent().parent().parent();t.addClass("open");var e=t.attr("id");document.location.href="#"+e,$("body").addClass("open"),sliderInit(e)}}),$(".project-close").on("click",function(){$("body").removeClass("open"),$(this).parent(".project").removeClass("open");var t=$(this).parent(".project").attr("id");$("#"+t+" .slider").slick("unslick"),window.location.hash="",document.getElementById(t).scrollIntoView(!0)}),t&&void 0!==t){var l="project"+s;l===(t=window.location.hash.substring(1))&&($("#"+t).addClass("open"),$("body").addClass("open"),sliderInit(l))}})})}});