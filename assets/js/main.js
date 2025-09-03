const burgerButton = document.getElementById("mob-menu-open"),
  closeButton = document.getElementById("mob-menu-close"),
  mobileMenu = document.querySelector(".header__nav-mobile--menu"),
  body = document.querySelector("body");

// mobile menu show / close
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  body.classList.add("lock");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  body.classList.remove("lock");
});
