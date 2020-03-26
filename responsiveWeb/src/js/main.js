$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        // 配置项
        // http://owlcarousel2.github.io/OwlCarousel2/
        items: 1,
        loop: true,
        // 自动滑动
        autoplay: true,
        // 图片滑动迟滞时间
        autoplayTimeout: 3000,
        // 鼠标悬浮时停止图片滑动
        autoplayHoverPause: true
    });
});