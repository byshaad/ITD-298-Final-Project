'use strict';

/* ========== Slide Buttons ========== */

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideBtns = document.querySelectorAll('.slide-btn');
console.log(slideBtns);


/* ========== Image Slides ========== */

let imageSlides = document.querySelectorAll('.image-slide');
let slideWidth = imageSlides[0].getBoundingClientRect().width;

let imageOffset = 0;
let imageWidth = slideWidth;

/* ========== Functions ========== */

if (imageOffset == 0) {
    prevBtn.style.display = 'none';
}

let moveSlide = function () {
    let translate = `translateX(${imageOffset}px)`;

    for (let imageSlide of imageSlides) {
        imageSlide.style.transform = translate;
    }


    if (imageOffset <= imageWidth * -5) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }

    if (imageOffset >= 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
};

/* ========== Events ========== */ 

nextBtn.addEventListener('click', () => {
    imageOffset = imageOffset - imageWidth;
    for (let i = 0; i < slideBtns.length; i++) {
        slideBtns[0].nextElementSibling.classList.add('selected');
    }
    moveSlide();
});

prevBtn.addEventListener('click', () => {
    imageOffset = imageOffset + imageWidth;
    moveSlide();
})