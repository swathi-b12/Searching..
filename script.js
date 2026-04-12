const slides = [
  { title: "Bookshelf", image: "images/house.jpg" },
  { title: "Chair", image: "images/chair.jpg" },
  { title: "Table", image: "images/c-shaped-table.jpg" },
  { title: "Clock", image: "images/clock.jpg" }
];

let currentSlide = 0;

const hero = document.querySelector(".hero");
const title = document.getElementById("heroTitle");
const menuItems = document.querySelectorAll(".hero-menu span");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateSlide(index) {
  currentSlide = index;

  hero.style.backgroundImage = `url(${slides[index].image})`;
  title.textContent = slides[index].title;

  menuItems.forEach(item => item.classList.remove("active"));
  menuItems[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => updateSlide(index));
});

setInterval(nextSlide, 4000);

/* ✅ FIX */
document.addEventListener("DOMContentLoaded", function () {
  updateSlide(0);
});
