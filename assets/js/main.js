const burgerButton = document.getElementById("mob-menu-open"),
  closeButton = document.getElementById("mob-menu-close"),
  mobileMenu = document.querySelector(".header__nav-mobile--menu"),
  body = document.querySelector("body"),
  overlay = document.querySelector(".overlay__body"),
  pcHeader = document.querySelector(".header__nav-pc--main-container"),
  sticky = pcHeader.offsetTop,
  pcNav = document.querySelector(".header__nav-pc");

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

// pc header collapse

// window.onscroll = () => {
//   if (window.pageYOffset > sticky) {
//     pcHeader.classList.add("sticky");
//   } else {
//     pcHeader.classList.remove("sticky");
//   }
// };

window.onscroll = () => {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    pcNav.style.top = "-64px";
  } else {
    pcNav.style.top = "0px";
  }
};
