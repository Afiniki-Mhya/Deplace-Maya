const cardSlider = document.querySelector(".cards-container");
const innerCards = document.querySelector(".cards");

let pressed = false;
let startx;
let x;

cardSlider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - innerCards.offsetLeft;
  cardSlider.style.cursor = "grabbing";
  cardSlider.style.userSelect = "none";  // Prevent text selection
  console.log(innerCards);
});

cardSlider.addEventListener("mouseenter", () => {
  if (!pressed) cardSlider.style.cursor = "grab";
});

cardSlider.addEventListener("mouseleave", () => {
  cardSlider.style.cursor = "grab";
  if (!pressed) cardSlider.style.userSelect = "";  // Restore text selection
});

cardSlider.addEventListener("mouseup", () => {
  pressed = false;
  cardSlider.style.cursor = "grab";
  cardSlider.style.userSelect = "";  // Restore text selection
});

window.addEventListener("mouseup", () => {
  pressed = false;
  cardSlider.style.cursor = "grab";
  cardSlider.style.userSelect = "";  // Restore text selection
});

cardSlider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  innerCards.style.left = `${x - startx}px`;
});


cardSlider.addEventListener("touchstart", (e) => {
  pressed = true;
  startx = e.touches[0].clientX - innerCards.offsetLeft;
  cardSlider.style.cursor = "grabbing";
  cardSlider.style.userSelect = "none";  
});

cardSlider.addEventListener("touchend", () => {
  pressed = false;
  cardSlider.style.cursor = "grab";
  cardSlider.style.userSelect = "";  
});

cardSlider.addEventListener("touchmove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.touches[0].clientX;
  innerCards.style.left = `${x - startx}px`;
});
