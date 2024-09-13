//and move caption 
//and move image or switch to different view
//add drop down menu for mobile


//js to make captions appear when hover over image and disappear without
$(document).ready(function(){
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
});