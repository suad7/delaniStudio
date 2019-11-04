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
$(document).ready(function () {
    $(".port").hover(function () {
        $(this).find(".mytext").fadeIn(500);
    }, function () {
        $(this).find(".mytext").fadeOut(500);
    });
});
$(document).ready(function () {
    document.getElementById("form").addEventListener("submit", submitForm)
    function submitForm() {
        alert("Thank you for reaching out to us");
    }
})





    