const cards = document.querySelector(".cards");
const innerSlider = document.querySelectorAll(".coll-card");

let pressed = false;
let startx;
let x;
let scrollLeft;

cards.addEventListener('mousedown', (e) => {
    isDown = true;
    cards.classList.add('dragging');
    startx = e.pageX - cards.offsetLeft;
    scrollLeft = cards.scrollLeft;
});

cards.addEventListener('mouseleave', () => {
    isDown = false;
    cards.classList.remove('dragging');
});

cards.addEventListener('mouseup', () => {
    isDown = false;
    cards.classList.remove('dragging');
});

cards.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - cards.offsetLeft;
    const walk = (x - startx) * 3; //scroll-fast
    cards.scrollLeft = scrollLeft - walk;
});