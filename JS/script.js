"use strict";
//
// Switch mode (light/dark)
//
window.addEventListener("DOMContentLoaded", () => {
  let switchMode = document.querySelector(".mode");

  switchMode.onclick = function () {
    let theme = document.querySelector("#theme");

    theme.classList.toggle("dark");
  };

  //
  // Burger menu
  //

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
          gotoBlock.getBoundingClientRect().top + pageYOffset - 100;

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
  var slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    controls: true,
    controlsText: ["", ""],
    controlsPosition: "bottom",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    gutter: 15,
    slideBy: 1,
  });
});
