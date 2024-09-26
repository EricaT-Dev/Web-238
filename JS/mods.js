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
      }); 
    //animate scroll to top when click link
    $("#top-link").click(function(){
        $("html").animate({scrollTop: 0}, "slow");
        return false;
    })
});
