let rMenuButtons = Array.from(document.getElementsByClassName("r-menu__item"));
const bRad = "1em";
let sideBorder = {
  up: `0 0 ${bRad} 0`,
  down: `0 ${bRad} 0 0`,
};
let downBorder = {
  up: `0 ${bRad} 0  0`,
  down: ` ${bRad} 0 0 0`,
};
let bSet;
rMenuButtons.forEach((button) => {
  if (!button.classList.contains("r-menu__item_placeholder"))
    button.addEventListener("click", (e) => {
      let curentActive = document.querySelector(".r-menu__item_active");
      curentActive.classList.remove("r-menu__item_active");
      e.target.classList.add("r-menu__item_active");
      updateBorders(e.target, window.matchMedia("(max-width: 480px)").matches);
    });
});

window.onorientationchange = () => {
  let activeItem = document.querySelector(".r-menu__item_active");
  updateBorders(activeItem, !window.matchMedia("(max-width: 480px)").matches);
};

let updateBorders = function (active, isMenuBottom) {
  bSet = isMenuBottom ? downBorder : sideBorder;
  rMenuButtons.forEach((el) => {
    el.style.borderRadius = "0 0 0 0";
  });
  let curIndex = rMenuButtons.findIndex((elem) => elem === active);
  rMenuButtons[curIndex - 1].style.borderRadius = bSet.up;
  rMenuButtons[curIndex + 1].style.borderRadius = bSet.down;
};
