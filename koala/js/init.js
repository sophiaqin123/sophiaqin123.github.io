// library inits

// materialize init
$('.sidenav').sidenav();
$('.scrollspy').scrollSpy({throttle: -100, scrollOffset: 80.5});
$('.collapsible').collapsible();

// parallax init
console.log(jQuery);
if(jQuery.browser.mobile) {
    // if mobile, turn off parallax
    $('.parallax img').css("opacity", 1)
} else {
    // if desktop, turn on parallax
    $('.parallax').parallax();
}

// wow.js init
console.log('WOW INIT');
new WOW().init();
