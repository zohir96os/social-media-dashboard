let modeBTN = document.querySelector(".dark-mode button");
let swtiched = document.querySelector(".switch");
let body = document.querySelector("body");
let cards = document.querySelectorAll(".card");

function darkMode() {
  modeBTN.classList.toggle("darkBTN");
  swtiched.classList.toggle("switchDark");
  body.classList.toggle("darkMode");
  cards.forEach((card) => {
    card.classList.toggle("dark-card");
  });
  const isDarkMode = swtiched.classList.contains("switchDark");
  localStorage.setItem("darkMode", isDarkMode);
}
if (localStorage.getItem("darkMode") === "true") {
  darkMode();
}

modeBTN.addEventListener("click", darkMode);
