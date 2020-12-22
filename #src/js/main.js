@@include('_slick.min.js')

// $(function () {
$(document).ready(function(){
    
    $('.main-slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><div></div></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><div></div></button>',

        autoplay: true,
        autoplaySpeed: 3000,
    });
});