"use strict";
//
// Switch mode (light/dark)
//
let switchMode = document.querySelector(".mode");

switchMode.onclick = function () {
  let theme = document.querySelector("#theme");

  theme.classList.toggle("dark");
};

//
// Burger menu
//
// test mobile device or not
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// burger
const iconMenu = document.querySelector(".menu_icon");
if (iconMenu) {
  const menu = document.querySelector(".menu");

  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
}

// smooth scroll
const menuLinks = document.querySelectorAll(".menu-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    console.log(menuLink);
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset - 30;

      window.scrollTo({
        top: gotoBlockValue,
        behaviour: "smooth",
      });

      e.preventDefault();
    }
  }
}

//
// Slider
//
