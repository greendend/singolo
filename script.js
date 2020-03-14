const iphone1 = document.querySelector(".iphone-button1");
const offscreen1 = document.querySelector(".offscreen1");
let screenoff1 = false;

iphone1.addEventListener('click', () => {
    screenoff1 = !screenoff1;
    screenoff1 ? offscreen1.style.display = "block" : offscreen1.style.display = "none";
});