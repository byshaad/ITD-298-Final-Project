'use strict'
/* ========= Variables =========
================================ */

const menuButton = document.querySelector('.hamburger-icon');
const closeButton = document.querySelector('.menu-close');
const offCanvasMenu = document.getElementById('off-canvas-menu');
const menuOverlay = document.querySelector('.menu-overlay');

/* ========= Functions =========
================================ */

let openMenu = function () {
        offCanvasMenu.classList.remove('closed');
        offCanvasMenu.classList.add('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuOverlay.style.display = 'block';
};

let closeMenu = function () {
        offCanvasMenu.classList.remove('open');
        offCanvasMenu.classList.add('closed');
        menuButton.setAttribute('aria-expanded', 'false');
        menuOverlay.style.display = 'none';
};


/* ========== Events ===========
================================ */

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);