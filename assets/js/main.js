const burgerButton = document.getElementById("mob-menu-open"),
  closeButton = document.getElementById("mob-menu-close"),
  mobileMenu = document.querySelector(".header__nav-mobile--menu"),
  body = document.querySelector("body"),
  overlay = document.querySelector(".overlay__body");

// mobile menu show / close
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  body.classList.add("lock");
  overlay.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  body.classList.remove("lock");
  overlay.classList.remove("active");
});

// const mobMenu = document.querySelectorAll(".mobile__menu"),
//   mobileMenu = document.querySelector(".header__nav-mobile--menu"),
//   body = document.querySelector("body"),
//   overlay = document.querySelector(".overlay__body");

// mobMenu.addEventListener("click", () => {
//   mobileMenu.classList.toggle("active");
//   body.classList.toggle("lock");
//   overlay.classList.toggle("active");
// });
