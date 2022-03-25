//Animation for navbar on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", fixNav);
function fixNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
const textEl = document.querySelector(".auto-text");
const text = "OUR FEATURE PRODUCTS";
let idx = 1;
writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, 150);
}
