$(function(){
    var url = './assets/json/content.bin';
    var $body = $("body");

    $.ajax({
        url: url,
        scriptCharset: "utf-8",
        type: "GET",
        success: function (data) {
            var actual = JSON.parse(decodeURIComponent(escape(window.atob(data))));
            var loc = getCookie('lang');
            var locData = actual[loc];
            var nav = locData.nav.labels;
            var homepage = locData.pages.homepage;
            var header = homepage.header.content;
            var intro = homepage.content.intro;
            var brands = intro.images;
            var about = homepage.content.about;
            var aboutUs = homepage.content.aboutUs;
            var values = homepage.content.values;
            var comparison = homepage.content.comparison;
            var method = homepage.content.method;
            var model = homepage.content.model;
            var projects = homepage.content.projects;
            var footer = homepage.footer;

            if (locData) {
                $body.removeClass('loading');
            }

            if (loc === undefined) {
                chooseCookie();
            }

            if(nav) {
                var navItem = $('#nav > ul > li ');
                navItem.find('a[href="#preabout"]').html(nav.about);
                navItem.find('a[href="index.html#preabout"]').html(nav.about);
                navItem.find('a[href="#method"]').html(nav.method);
                navItem.find('a[href="index.html#method"]').html(nav.method);
                navItem.find('a[href="#values"]').html(nav.values);
                navItem.find('a[href="index.html#values"]').html(nav.values);
                navItem.find('a[href="#aboutUs"]').html(nav.aboutUs);
                navItem.find('a[href="index.html#aboutUs"]').html(nav.aboutUs);
                navItem.find('a[href="projects.html"]').html(nav.projects);
                navItem.find('a[href="#footer"]').html(nav.contact);
                navItem.find('a[href="#footer"]').html(nav.contact);
                navItem.find('a[href="#mission"]').html(nav.mission);
                navItem.find('a[href="index.html#mission"]').html(nav.mission);
                navItem.find('a[href="#model"]').html(nav.model);
                navItem.find('a[href="index.html#model"]').html(nav.model);
                navItem.find('a[href="#foundation"]').html(nav.foundation);
                navItem.find('a[href="index.html#foundation"]').html(nav.foundation);
                navItem.find('a[href="#comparison"]').html(nav.comparison);
                navItem.find('a[href="index.html#comparison"]').html(nav.comparison);
            }

            if (header) {
                $('.background-video').css({'backgroundImage': header.backgroundImageSrc});
                $('.youtube-video-embed iframe').attr('id', header.youtubeURL).attr('src', 'https://www.youtube.com/embed/' + header.youtubeURL + '?autoplay=0&rel=0&fs=1&enablejsapi=1')
                $('video source#mp4').attr('src', header.backgroundVideoMp4Src);
                $('video source#webm').attr('src', header.backgroundVideoWebMSrc);
                $body.find("[data-content='header-content-title']").html(header.header);
            }

            if (intro) {
                $body.find("[data-content='content-intro-title']").html(intro.header);
                $body.find("[data-content='content-intro-desc']").html(intro.description);

                if($('.brandlist').length > 0){
                    $.each(brands, function (index, brand) {
                        if(brand.src){
                            $body.find('.brandlist').append('<li><img src="'+brand.src+'" alt="'+brand.alt+'" /></li>');
                        }
                    });
                }
            }

            if (about) {
                $body.find("[data-content='content-about-row1-title']").html(about.row1.header);
                $body.find("[data-content='content-about-row1-image']").css({'backgroundImage': about.row1.image.src});
                $body.find("[data-content='content-about-row1-desc']").html(about.row1.description);

                $body.find("[data-content='content-about-row2-title']").html(about.row2.header);
                $body.find("[data-content='content-about-row2-image']").css({'backgroundImage': about.row2.image.src});
                $body.find("[data-content='content-about-row2-desc']").html(about.row2.description);
            }

            if (aboutUs) {
                $body.find("[data-content='content-aboutUs-title']").html(aboutUs.header);
                $body.find("[data-content='content-aboutUs-description']").html(aboutUs.description);

                $body.find("[data-content='content-employee-niek-image']").attr('src', aboutUs.employees.niek.image.src).attr('alt', aboutUs.employees.niek.image.alt);
                $body.find("[data-content='content-employee-niek-title']").html(aboutUs.employees.niek.header);
                $body.find("[data-content='content-employee-niek-desc']").html(aboutUs.employees.niek.description);

                $body.find("[data-content='content-employee-jan-image']").attr('src', aboutUs.employees.jan.image.src).attr('alt', aboutUs.employees.jan.image.alt);
                $body.find("[data-content='content-employee-jan-title']").html(aboutUs.employees.jan.header);
                $body.find("[data-content='content-employee-jan-desc']").html(aboutUs.employees.jan.description);
            }

            if (values) {
                $body.find("[data-content='content-values-image']").css({'backgroundImage': values.image.src});
                $body.find("[data-content='content-values-title']").html(values.header);
                $body.find("[data-content='content-values-desc']").html(values.description);

                $body.find("[data-content='content-value1']").html(values.values.value1);
                $body.find("[data-content='content-value2']").html(values.values.value2);
                $body.find("[data-content='content-value3']").html(values.values.value3);
                $body.find("[data-content='content-value4']").html(values.values.value4);
                $body.find("[data-content='content-value5']").html(values.values.value5);
                $body.find("[data-content='content-value6']").html(values.values.value6);
            }

            if (method) {
                $body.find("[data-content='content-method-title']").html(method.header);
                $body.find("[data-content='content-method-desc']").html(method.description);
                $body.find("[data-content='content-method-hoverLabel']").html(method.hoverLabel);

                $body.find("[data-content='content-method-intro-title']").html(method.methods.intro.header);
                $body.find("[data-content='content-method-intro-desc']").html(method.methods.intro.description);

                $body.find("[data-content='content-method-design-title']").html(method.methods.design.header);
                $body.find("[data-content='content-method-design-desc']").html(method.methods.design.description);

                $body.find("[data-content='content-method-tuning-title']").html(method.methods.tuning.header);
                $body.find("[data-content='content-method-tuning-desc']").html(method.methods.tuning.description);

                $body.find("[data-content='content-method-construction-title']").html(method.methods.construction.header);
                $body.find("[data-content='content-method-construction-desc']").html(method.methods.construction.description);

                $body.find("[data-content='content-method-eval-title']").html(method.methods.eval.header);
                $body.find("[data-content='content-method-eval-desc']").html(method.methods.eval.description);
            }

            if (model) {
                $body.find("[data-content='content-model-title']").html(model.header);
                $body.find("[data-content='content-model-image']").css({'backgroundImage': model.image.src});
                $body.find("[data-content='content-model-desc']").html(model.description);
            }

            if (projects) {
                $body.find("[data-content='content-projects-title']").html(projects.header);
                $body.find("[data-content='content-projects-desc']").html(projects.description);
                $body.find("[data-content='content-projects-button']").html(projects.button.label);

                $body.find("[data-content='content-project1-image']").attr('src', projects.project1.image.src).attr('alt', projects.project1.image.alt);
                $body.find("[data-content='content-project1-title']").html(projects.project1.header);
                $body.find("[data-content='content-project1-btn']").html(projects.project1.button);

                $body.find("[data-content='content-project2-image']").attr('src', projects.project2.image.src).attr('alt', projects.project2.image.alt);
                $body.find("[data-content='content-project2-title']").html(projects.project2.header);
                $body.find("[data-content='content-project2-btn']").html(projects.project2.button);
            }

            if(comparison){
                $body.find("[data-content='content-projects-comparison-title']").html(comparison.header);
                $body.find("[data-content='content-projects-comparison-desc']").html(comparison.description);
            }

            if (footer) {
                $body.find("[data-content='footer-testimonials-title']").html(footer.testimonials.header);
                $body.find("[data-content='footer-contacts-header']").html(footer.contacts.header);

                $body.find("[data-content='footer-contacts-jan-title']").html(footer.contacts.jan.header);
                $body.find("[data-content='footer-contacts-jan-email']").attr('href', footer.contacts.jan.links.email.src).html(footer.contacts.jan.links.email.header);
                $body.find("[data-content='footer-contacts-linkedin-jan']").attr('href', footer.contacts.jan.links.linkedin.src);
                $body.find("[data-content='footer-contacts-linkedin-jan-title']").html( footer.contacts.jan.links.linkedin.header+' ');
                $body.find("[data-content='footer-contacts-call-jan-phone']").attr('href', footer.contacts.jan.phone);

                $body.find("[data-content='footer-contacts-niek-title']").html(footer.contacts.niek.header);
                $body.find("[data-content='footer-contacts-niek-email']").attr('href', footer.contacts.niek.links.email.src).html(footer.contacts.niek.links.email.header);
                $body.find("[data-content='footer-contacts-linkedin-niek']").attr('href', footer.contacts.niek.links.linkedin.src);
                $body.find("[data-content='footer-contacts-linkedin-niek-title']").html(footer.contacts.niek.links.linkedin.header+' ');
                $body.find("[data-content='footer-contacts-call-niek-phone']").attr('href', footer.contacts.niek.phone);

                $body.find("[data-content='footer-contacts-phone-header']").html(footer.phone.header);
                $body.find("[data-content='footer-contacts-visit-header']").html(footer.visit.header);

                $body.find("[data-content='footer-contacts-visit-desc']").html(footer.visit.description);
                $body.find("[data-content='footer-copyright-desc']").html(footer.copyright.description);
            }
        }
    });
});
