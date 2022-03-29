// Responsive Navigation
const navSlide = document.querySelector(".burger");
navSlide.addEventListener("click", () => {
  const nav = document.querySelector(".navlist");

  navSlide.classList.toggle("switch");
  nav.classList.toggle("responsiveNav");
});

// Get Current Month
const month = document.getElementById("month");
const monthValues = document.getElementById("month_value");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();

monthValues.innerHTML = months[d.getMonth()].toUpperCase();
month.innerHTML = d.getMonth() + 1;

// Get date
function lastDate() {
  let newDate = document.getElementById("date");
  if (d.getMonth() == 1) {
    if (
      // leap year
      (0 == d.getFullYear() % 4 && 0 != d.getFullYear() % 100) ||
      0 == d.getFullYear() % 400
    ) {
      newDate.innerHTML = 29;
    } else {
      // not a leap year
      newDate.innerHTML = 28;
    }
  } else if (
    // months has 30 days
    d.getMonth() == 3 ||
    d.getMonth() == 5 ||
    d.getMonth() == 8 ||
    d.getMonth() == 10
  ) {
    newDate.innerHTML = 30;
  } else {
    // months has 31 days
    newDate.innerHTML = 31;
  }
}
lastDate();

// Get Year
const year = document.getElementById("year");
year.innerHTML = d.getFullYear();

let popup = document.querySelector(".popup");
let formContainer = document.querySelector(".form_container");
// open popup
function openPopup() {
  // popup.style.visibility = "visible";
  popup.setAttribute("style", "opacity: 1;pointer-events: all;");
  formContainer.style.top = "0";
}

// open popup with three different buttons
let res = document.querySelectorAll(
  ".open_popup, .open_popup_two, .open_popup_three"
);
for (let i = 0; i < res.length; i++) {
  res[i].addEventListener("click", openPopup);
}
// document.querySelector(".open_popup").addEventListener("click", openPopup);
// document.querySelector(".open_popup_two").addEventListener("click", openPopup);
// document
//   .querySelector(".open_popup_three")
//   .addEventListener("click", openPopup);

// close popup function
function closePopup() {
  popup.removeAttribute("style", "opacity: 0;pointer-events: none;");
  formContainer.style.top = "-100px";
}

// close popup
document
  .querySelector(".fa-times-circle")
  .addEventListener("click", closePopup);

// Close popup while clicking outside
window.addEventListener("click", (e) => {
  if (e.target == popup) {
    closePopup();
  }
});

// AOS Animation
AOS.init({
  offset: 500,
  duration: 1000,
  once: true,
});
