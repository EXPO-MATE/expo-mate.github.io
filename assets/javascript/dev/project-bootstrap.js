$(function(){
    // Load projects
    if ($('body').hasClass('projects')){
        var url = './assets/json/content.bin';
        var hash = window.location.hash;
        $.ajax({
            url: url,
            scriptCharset: "utf-8",
            type: "GET",
            success: function (data) {
                var actual = JSON.parse(decodeURIComponent(escape(window.atob(data))))
                , loc = getCookie('lang')
                , locale = actual[loc] || []
                , homeproject = locale.pages.homepage.content.projects
                , reviewLink = homeproject.reviewLink || ''
                , projectDetail = locale.pages.projects
                , section = $('#projects .projects-wrapper');

                var dutchDefault = actual['nl'].pages.projects;

                $.each(projectDetail, function (index, item) {

                    if (item) {
                        var count = parseInt(index)
                            , review = item.review
                            , author = review.author || ''
                            , desc = review.description || ''
                            , reviewDate = review.date || ''
                            , identifier = author.replace(/[^A-Z0-9]+/ig, "-").toLowerCase()
                            , starCount = review.stars || ''
                            , projectID = item.id || 'project-'+index;

                            //Get overview image from dutch loc.
                            var overviewImg = '';

                            //Search for fallback image
                            if (item.images && item.images.length > 0) {
                                overviewImg = item.images[0].src;
                            }
                            //look in root for base image
                            $.each(dutchDefault, function (index, root) {
                                    if(root.id === projectID) {
                                        overviewImg = root.images[0].src;
                                    }
                            });


                        section.append('<div class="project" id='+projectID+'>\n' +
                                        '	<div class="project-wrapper">\n' +
                                        '		<div class="project-image">\n' +
                                        '       <div data-project="'+projectID+'" class="project-overview-image" style="background-image: url('+ overviewImg +')"></div>\n' +
                                        '		</div>\n' +
                                        '		<div class="project-desc-wrapper">\n' +
                                        '			<div class="project-desc-content">\n' +
                                        '				<div class="project-header">\n' +
                                        '					<h2 class="project-title" data-project="'+projectID+'">'+item.header+'</h2>\n' +
                                        '					<div class="project-sub-title">'+item.subTitle+'</div>\n' +
                                        '				</div>\n' +
                                        '				<div class="project-desc"> \n' +
                                        '				   <span>'+item.description+'</span> \n' +
                                        '				   <a class="read-review" data-revID="'+projectID+'">'+reviewLink+' '+item.header+'</a> \n' +
                                        '			   </div>\n' +
                                        '			</div>\n' +
                                        '		</div> \n' +
                                        '	</div>\n' +
                                        '	<div class="project-review">\n' +
                                        '		<div class="review-close"></div> \n' +
                                        '		<div class="review" id="'+identifier+'">\n' +
                                        '			<div class="review-author">'+author+'</div>\n' +
                                        '			<div class="review-date">'+reviewDate+'</div>\n' +
                                        '           <div class="review-stars">\n' +
                                        '               <i class="icon-star-full"></i>\n' +
                                        '               <i class="icon-star-full"></i>\n' +
                                        '               <i class="icon-star-full"></i>\n' +
                                        '               <i class="icon-star-full"></i>\n' +
                                        '               <span></span>\n' +
                                        '           </div>\n' +
                                        '			<div class="review-text">'+desc+'</div>\n' +
                                        '		</div>\n' +
                                        '	</div>\n' +
                                        '</div>');

                        //Make sure 5 starts are show for 5 star reviews
                        if (starCount > 4) {
                            $('#'+projectID).find('.review-stars > span').append('<i class="icon-star-full"></i>');
                        }

                        //Hide blank reviews
                        if (review === undefined || desc === '' || desc === undefined){
                            $('#'+projectID).find('.read-review').addClass('hidden');
                        }

                        //Open Review
                        $('.read-review').on('click', function(e){
                            e.preventDefault();
                            var project = $(this).attr('data-revID');
                            $("#"+project).addClass('show-review').find('.project-review').addClass('show');
                        });

                        //Close Review
                        $('.review-close').on('click', function(){
                            $(this).parent().removeClass('show').parent('.project').removeClass('show-review');
                        });

                        //Open specific project based on hash
                        if(hash && hash !== undefined){
                            hash = window.location.hash.substring(1);
                            if (projectID === hash) {
                                showModal(null, null, projectID);
                            }
                        }
                    }
                });
            },
            error: function (err) {
                chooseCookie();
            }
        });

        // modal image handler
        $(document).on("click touch", ".project-title", function(e){
            var that = $(this);
            showModal(e, that);
        });

        $(document).on("click touch", ".project-overview-image", function(e){
            var that = $(this);
            showModal(e, that);
        });

        $(document).on("click touch", ".modal-close", function(e) {
            var that = $(this);
            closeModal(e, that);
        });

        $(document).on("click touch", ".modal", function(e) {
            if (e.target !== this)
                return;
            var that = $(this);
            closeModal(e, that);
        });
    }
});

function showModal(e, that, id){
    if (e){
        e.preventDefault();
    }

    if(!$('body').hasClass('open')) {
        var projectID = '';
        if (that === undefined || that === null){
            projectID = id;
        } else {
            projectID = that.data('project');
        }

        if (projectID !== undefined) {
            $('.modal').data('project', projectID);
            $('body').addClass('open');

            $.ajax({
                url: './assets/json/content.bin',
                scriptCharset: "utf-8",
                type: "GET",
                success: function (data) {
                    var actual = JSON.parse(decodeURIComponent(escape(window.atob(data))))
                    , loc = 'nl'
                    , projectDetail = actual[loc].pages.projects
                    , sliderElems = [];


                    $.each(projectDetail, function (index, item) {
                        if (projectID === item.id) {
                            $('.slider').empty();

                            var imageContent = item.images;

                            //Add project id to url hash
                            document.location.href="#"+projectID;

                            if (imageContent && imageContent.length > 0) {
                                $.each(imageContent, function (index, item) {
                                    var mediaSrc = item.src
                                    , isImage = false
                                    , fileType = mediaSrc.split('.').pop().toLowerCase();

                                    if (fileType === 'jpg' || fileType === 'png') {
                                        isImage = true;
                                    }

                                    if(item && isImage){
                                        sliderElems.push('<div class="project-image">\n' +
                                                            '<img src="'+mediaSrc+'" alt="'+item.header+'" />\n' +
                                                        '</div>')
                                    } else {
                                        sliderElems.push('<div class="project-image youtube">\n' +
                                        '<div class="youtube-video-embed embed-responsive embed-responsive-16by9" id="video">\n' +
                                        '<span>\n' +
                                        '    <iframe\n' +
                                        '        id="player"\n' +
                                        '        class="youtube-video embed-responsive-item"\n' +
                                        '        frameborder="0"\n' +
                                        '        allowfullscreen="1"\n' +
                                        '        allow="autoplay; encrypted-media"\n' +
                                        '        title="YouTube video player"\n' +
                                        '         src="https://www.youtube.com/embed/'+ mediaSrc +'?autoplay=0&rel=0&fs=1&enablejsapi=1">\n' +
                                        '    </iframe>\n' +
                                        '  </span>\n' +
                                        '  </div>\n' +
                                        ' </div>')
                                    }
                                });
                            }

                            sliderInit(sliderElems);
                        }
                    });
                }
            });
        }
    }
}

function closeModal(e, that){
    $('body').removeClass('open');
    var parentID = that.parent().data('project');
    window.location.hash="";
    if(that.hasClass('modal')) {
        var parentID = that.data('project');
    }
    $('.slider').slick("unslick");
    $('.slider').empty();
    document.getElementById('project-'+parentID).scrollIntoView(true);
}

function sliderInit(sliderElems){
    $('.slider').append(sliderElems);

    setTimeout(function(){
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(".icon-arrow-left"),
            nextArrow: $(".icon-arrow-right"),
            autoplay: true,
            dots: false,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            lazyLoad: 'onDemand',
            swip: true
        });
    },100);
}

