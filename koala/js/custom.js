// custom listeners and inits
let topNav = document.getElementById("top-nav");
let navHome = document.getElementById("nav-home");
let homeButton = document.getElementById("home-button");

/*
 * LISTENERS
 */
function scroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollTop > 10) {
        if (!topNav.classList["nav-solid"]) {
            topNav.classList.remove("nav-transparent");
            topNav.classList.add("nav-solid");
        }
    } else {
        if (!topNav.classList["nav-transparent"]) {
            topNav.classList.remove("nav-solid");
            topNav.classList.add("nav-transparent");
        }
    }
}

const raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
const $window = $(window);
let lastScrollTop = $window.scrollTop();

function loop() {
    const scrollTop = $window.scrollTop();
    if (lastScrollTop === scrollTop) {
        raf(loop);
        return;
    } else {
        lastScrollTop = scrollTop;
        scroll();
        raf(loop);
    }
}

scroll();
loop();

navHome.onclick = function () {
    homeButton.click();
};
