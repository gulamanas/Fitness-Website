// Responsive Navigation
const navSlide = document.querySelector(".burger");
navSlide.addEventListener("click", () => {
    const nav = document.querySelector(".navlist");
    
    navSlide.classList.toggle("switch");
    nav.classList.toggle("responsiveNav");
});