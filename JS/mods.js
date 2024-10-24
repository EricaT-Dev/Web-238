$(document).ready(function(){
    //js to make captions appear when hover over image and disappear without
    $(".img-desc").hide();
    $(".art-pieces:first").hover(function(){
        $(".img-desc:first").toggle();
    })
    $(".art-pieces:last").hover(function(){
        $(".img-desc:last").toggle();
    })
    $(".art-pieces:nth-child(2)").hover(function(){
        $("#desc2").toggle();
    })
    $(".art-pieces:nth-child(3)").hover(function(){
        $("#desc3").toggle();
    })
    $(".art-pieces:nth-child(4)").hover(function(){
        $("#desc4").toggle();
    })
    //drop down menu for mobile
    $("#dropdown-button").click(function(){
        $(".navigation").toggle();
    })
    //animation of navigation on hover
    //and color change on hover
    $("#homepage").hover(function(){
        $(".navigation > li:first").animate(
            {"margin-left": "10px"}
            )
            $("#homepage").css("color", "white")
        },function(){
        $(".navigation > li:first").animate(
            {"margin-left": "0"},
        )
        $("#homepage").css("color", "#2b0653")
    })
    $("#art-page").hover(function(){
        $(".navigation > li:nth-child(2)").animate(
            {"margin-left": "10px"}
        )
        $("#art-page").css("color", "white")
    },function(){
        $(".navigation > li:nth-child(2)").animate(
            {"margin-left": "0"}
        )
        $("#art-page").css("color", "#2b0653")
    })
    $("#about-page").hover(function(){
        $(".navigation > li:nth-child(3)").animate(
            {"margin-left": "10px"}
        )
        $("#about-page").css("color", "white")
    },function(){
        $(".navigation > li:nth-child(3)").animate(
            {"margin-left": "0"}
        )
        $("#about-page").css("color", "#2b0653")
    })
    $("#contact-page").hover(function(){
        $(".navigation > li:last").animate(
            {"margin-left": "10px"}
        )
        $("#contact-page").css("color", "white")
    },function(){
        $(".navigation > li:last").animate(
            {"margin-left": "0"}
        )
        $("#contact-page").css("color", "#2b0653")
    })
    //top menu scrolls with reader
    $(window).scroll(function(){ 
        $('#top-header').css('top', $(document).scrollTop()); 
      }) 
    //animate scroll to top when click link
    $("#top-link").click(function(){
        $("html").animate({scrollTop: 0}, "slow");
        return false;
    })
    //lightbox function for images
    //adds dark background on click and close button
    $("a.imgLightbox").click(function(){
        $("#overlay").css("display", "block")
        $("#closeOverlay").css("display", "block")
    })
    //removes background, image, and close button on click
    $("#closeOverlay").click(function(){
        $("#overlay").css("display", "none")
        $("#closeOverlay").css("display", "none")
        $(".lightBox-imgs").css("display", "none")
        $("#art-10").removeClass("darken")
        $("#art-10").addClass("show")
    })
    //adds images for each clicked
    $("#imageOneLink").click(function(){
        $("#lightBox-img1").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageTwoLink").click(function(){
        $("#lightBox-img2").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageThreeLink").click(function(){
        $("#lightBox-img3").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageFourLink").click(function(){
        $("#lightBox-img4").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageFiveLink").click(function(){
        $("#lightBox-img5").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageSixLink").click(function(){
        $("#lightBox-img6").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageSevenLink").click(function(){
        $("#lightBox-img7").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageEightLink").click(function(){
        $("#lightBox-img8").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageNineLink").click(function(){
        $("#lightBox-img9").css("display", "block")
        $("#art-10").addClass("darken")
    })
    $("#imageTenLink").click(function(){
        $("#lightBox-img10").css("display", "block")
        $("#art-10").addClass("darken")
    })
    //resize clickable images on hover
    $(".art-pieces").hover(function(){
        $(this).animate(
            {width:"+=2%"}
        )
    },
    function(){
        $(this).animate(
            {width:"-=2%"}
        )
    })
    //slideshow for Vangoh Lamp
    $(document).ready(function(){
        slideShow();
      });
      function slideShow() {
        var current = $('#slideshow .showing');
        var next = current.next().length ? current.next() : 
        current.siblings().first();
      
        current.hide().removeClass('showing');
        next.fadeIn().addClass('showing');
        
        setTimeout(slideShow, 2500);
      }
    //tooltips to add description in lightbox
    $(".lightBox-imgs").hover(function(){
        var hoverText = $(this).attr("alt");
        $(this)
            .data('tipText', hoverText)
            .removeAttr('alt');
        $('<h3 class="toolTipReplacement"></h3>')
        .text(hoverText)
        .appendTo('#overlay')
    },
    function(){
        $(this)
            .attr('alt', $(this).data('tipText'))
            $('.toolTipReplacement').remove();
    }    
)
});
