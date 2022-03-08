// Responsive Navigation
const navSlide = document.querySelector(".burger");
navSlide.addEventListener("click", () => {
  const nav = document.querySelector(".navlist");

  navSlide.classList.toggle("switch");
  nav.classList.toggle("responsiveNav");
});

// AOS Animation
AOS.init({
  offset: 500,
  duration: 1000,
  once: true,
});
