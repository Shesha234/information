$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.main-nav').toggleClass('active')
        $('.hero-text-box').toggleClass('active')
        $('.hero-text').toggleClass('active')
    })
});