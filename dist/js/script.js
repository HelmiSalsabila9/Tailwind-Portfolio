// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('#header');
    const fixsedNav = header.offsetTop;

    if (window.pageXOffset > fixsedNav) {
        header.classList.add('navfix');
    } else {
        header.classList.remove('navfix');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});