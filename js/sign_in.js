let theme = localStorage.getItem("theme")
const hamburger = document.querySelector(".bi-filter-right");
const cancel = document.querySelector(".bi-x-circle-fill");
let mobile = document.querySelector(".mobile");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  mobile.classList.remove("hide");
});

cancel.addEventListener("click", () => {
  mobile.classList.add("hide");
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 27) {
    mobile.classList.add("hide");
  }
});

let loginForm = document.forms.loginField;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = loginForm.username.value;
  let password = loginForm.password.value;
  if (username.length < 1 || username === " ") {
    alert("Enter a valid username");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8");
    return;
  }
  window.location.href = "/html/public_profile.html";
});

if (theme === 'enabled') {
  darkMode()
}

function darkMode() {
  theme = localStorage.getItem("theme")
  localStorage.setItem("theme", "enabled")
  var element = document.body;
  element.className = "dark-mode";

  let dark = document.querySelector('.bi-moon-stars-fill')
  dark.classList.add("toBe")

  let light = document.querySelector('.bi-brightness-high')
  light.classList.remove("toBe")

  let bio = document.querySelector(".bio")
  bio.classList.add("backgroundColor")
}

function lightMode() {
  theme = localStorage.getItem("theme")
  localStorage.setItem("theme", null)
  var element = document.body;
  element.className = "light-mode";

  let dark = document.querySelector('.bi-moon-stars-fill')
  dark.classList.remove("toBe")

  let light = document.querySelector('.bi-brightness-high')
  light.classList.add("toBe")

  let bio = document.querySelector(".bio")
  bio.classList.remove("backgroundColor")
}