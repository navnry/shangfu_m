$(".menu").click(function () {
    $(".nav").toggleClass("on");
    event.preventDefault()
});
$(".nav > ul > li").click(function (e) {
    $(this).addClass("on").children(".submenu").stop().slideToggle(300);
    $(this).siblings().removeClass("on").children(".submenu").slideUp(300)
    e.stopPropagation()
});
$(".nav").on("touchmove", function (e) {
    $(this).removeClass("on")
    e.stopPropagation()
});
$(".nav>ul").on("touchmove", function (e) {
    e.stopPropagation()
});
$(".nav>ul").on("click", function (e) {
    e.stopPropagation()
});
$(".nav").on("click", function (e) {
    $(this).removeClass("on")
});
