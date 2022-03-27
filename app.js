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

const monthsInNumber = months[d.getMonth()];
monthValues.innerHTML = monthsInNumber.toUpperCase();
month.innerHTML = d.getMonth() + 1;

// Get date
function lastDate() {
  let newDate = document.getElementById("date");
  if (monthsInNumber == months[1]) {
    newDate.innerHTML = 28;
  } else if (
    monthsInNumber == months[3] ||
    months[5] ||
    months[8] ||
    months[10]
  ) {
    newDate.innerHTML = 30;
  } else {
    newDate.innerHTML = 31;
  }
}
lastDate();

// Get Year
const year = document.getElementById("year");
year.innerHTML = d.getFullYear();

// AOS Animation
AOS.init({
  offset: 500,
  duration: 1000,
  once: true,
});
