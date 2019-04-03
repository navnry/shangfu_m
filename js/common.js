$(".menu").click(function () {
    $(".nav").toggleClass("on");
    event.preventDefault()
});
$(".nav > ul > li").click(function () {
    $(this).addClass("on").children(".submenu").stop().slideToggle(300);
    $(this).siblings().removeClass("on").children(".submenu").slideUp(300)
});
