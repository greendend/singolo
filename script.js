const iphone1 = document.querySelector(".iphone-button1");
const iphone2 = document.querySelector(".iphone-button2");
const iphone3 = document.querySelector(".iphone-button3");

const offscreen1 = document.querySelector(".offscreen1");
const offscreen2 = document.querySelector(".offscreen2");
const offscreen3 = document.querySelector(".offscreen3");

const CHEV_LEFT = document.querySelector(".chev_left");
const CHEV_RIGHT = document.querySelector(".chev_right");

let slider = document.getElementsByClassName("slider");

let screenoff1 = false;
let screenoff2 = false;
let screenoff3 = false;

iphone1.addEventListener('click', () => {
    screenoff1 = !screenoff1;
    screenoff1 ? offscreen1.style.display = "block" : offscreen1.style.display = "none";
});

iphone2.addEventListener('click', () => {
    screenoff2 = !screenoff2;
    screenoff2 ? offscreen2.style.display = "block" : offscreen2.style.display = "none";
});

iphone3.addEventListener('click', () => {
    screenoff3 = !screenoff3;
    screenoff3 ? offscreen3.style.display = "block" : offscreen3.style.display = "none";
});

CHEV_LEFT.addEventListener('click', () => {
    plusSlides(-1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

CHEV_RIGHT.addEventListener('click', () => {
    plusSlides(1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

function plusSlides(n) {
    offscreen1.style.display = "none";
    screenoff1 = false;
    offscreen2.style.display = "none";
    screenoff2 = false;
    offscreen3.style.display = "none";
    screenoff3 = false;
    showSlides(slideIndex += n);
}

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__images");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}