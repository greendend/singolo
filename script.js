// anchor

const menu = document.querySelector("nav ul");

menu.addEventListener("click", (event) => {
  menu.querySelectorAll('li a').forEach(e => e.classList.remove('current'));
  event.target.classList.add("current");

  let classForScroll = event.target.innerHTML.toLowerCase()+"";

  window.scrollTo({
    top: document.querySelector(`.${classForScroll}`).offsetTop - 89,
    behavior: 'smooth'
  });
});


// slider -----------------------------------------------
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
    if (slider[0].classList[2] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

CHEV_RIGHT.addEventListener('click', () => {
    plusSlides(1);
    if (slider[0].classList[2] == "blue") {
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

// portfolio --------------------------------------------

const PORTFOLIO = document.getElementById("portfolio-grid");
const GRID_ITEM = document.querySelectorAll(".portfolio__picture");

const MENU = document.getElementById("menu");
const MENU_PORTFOLIO = document.getElementById("menu-portfolio");

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('p').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    if (event.target.classList[1] == 'b1') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
    };
    if (event.target.classList[1] == 'b2') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
        GRID_ITEM[0].classList.add('last-item');
    };
    if (event.target.classList[1] == 'b3') {
        GRID_ITEM[0].classList.remove('last-item');
        GRID_ITEM[1].classList.remove('last-item');
        GRID_ITEM[2].classList.remove('last-item');
        GRID_ITEM[0].classList.add('last-item');
        GRID_ITEM[1].classList.add('last-item');
    };
    if (event.target.classList[1] == 'b4') {
        GRID_ITEM[0].classList.add('last-item');
        GRID_ITEM[1].classList.add('last-item');
        GRID_ITEM[2].classList.add('last-item');
    };
});

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// form -------------------------------------------------------------------

/* MODAL WINDOW */

const button = document.querySelector("form button");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");
const modalMessage = document.querySelector(".modal__message");

//Add Close button to modal window
function addCloseButton(node){
  node.innerHTML += "<button class='modal__close-button' type='button'>OK</button>";
  const modalCloseButton = document.querySelector(".modal__close-button");
  modalCloseButton.addEventListener("click", hideModal);
  return node;
}

//Get value from form field
function addNodeValue (node, fieldName, defaultValue = "Не заполнено", br) {
  let value = document.querySelector(node).value;
  value = (value == "") ? defaultValue : value;
  return `<p>${fieldName}: ${value}</p>`;
}

//Show modal window
function showModal () {
  modal.classList.remove("hidden");
}

//Hide modal window
function hideModal () {
  modal.classList.add("hidden");
}

//Create content of modal window
button.addEventListener("click", (event) => {
  let requiredFields = [...document.querySelectorAll("[required]")];
  let isValid = node => node.checkValidity();

  //Check if all required fields filled with valid data
  if ( requiredFields.every(isValid) ) {
    event.preventDefault();
    let message = "<p>Письмо отправлено</p>";

    message += addNodeValue("input[name='subject']",
                            "Тема",
                            "Без темы");

    message += addNodeValue("textarea[name='message']",
                            "Описание",
                            "Без описания");
    modalMessage.innerHTML = message;
    addCloseButton(modalMessage);
    showModal();
  }
});

// Add close action to modal window background
modalBackground.addEventListener("click", hideModal);
