$(document).ready(function () {
    $(".swapout").hide()
    $(".swapout01").hide()
    $(".swapout02").hide()
    $(".design").click(function () {
        $(".swapout").toggle();
        $(".myimage").toggle();
    })
    $(".development").click(function () {
        $(".swapout01").toggle();
        $(".myimage1").toggle();
    })
    $(".product").click(function () {
        $(".swapout02").toggle();
        $(".myimage2").toggle();
    })
});
$(document).ready(function(){
    $(".port").hover(function(){
        $(this).find(".mytext").fadeIn(500);
    }, function(){
        $(this).find(".mytext").fadeOut(500);
    });
});









    // $(".mytext").hide();
    // $(".mytext1").hide();
    // $(".mytext2").hide();
    // $(".mytext3").hide();
    // $(".mytext4").hide();
    // $(".mytext5").hide();
    // $(".mytext6").hide();
    // $(".mytext7").hide();
    // $("hoverme").mouseenter(function(){
    //     $(".hoverme").addClass("hover1");
    //     $(".mytext").show();
    // })
    // $("hoverme").mouseleave(function(){
    //     $(".hoverme").removeClass("hover1");
    //     $(".mytext").hide();
    // })
    // $(".hoverme,.hoverme1,.hoverme2,.hoverme3,.hoverme4,.hoverme5,.hoverme6,.hoverme7").mouseleave(function () {
    //     $(".hoverme").removeClass("hover1");
    //     $(".hoverme1").removeClass("hover2");
    //     $(".hoverme2").removeClass("hover3");
    //     $(".hoverme3").removeClass("hover4");
    //     $(".hoverme4").removeClass("hover5");
    //     $(".hoverme5").removeClass("hover6");
    //     $(".hoverme6").removeClass("hover7");
    //     $(".hoverme7").removeClass("hover8");
    //     $(".mytext").hide();
    // })
//})