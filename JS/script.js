let switchMode = document.querySelector(".mode");

switchMode.onclick = function () {
  let theme = document.querySelector("#theme");

  theme.classList.toggle("dark");
};
