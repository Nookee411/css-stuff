import "./styles/main.scss";
import "./styles/switch.scss";
import "./styles/menu.scss";
import "./styles/sideMenu.scss";
import "./styles/responsiveMenu.scss";
import "./resposiveMenu";

window.onload = (e) => {
  let firstContent = document.querySelector(".page__content");
  if (window.matchMedia("(max-width: 480px)").matches) {
    let para = document.createElement("p");
    para.innerText = "On touchscreen devices hovering always active";
    firstContent.appendChild(para);
  }
};

let themeToggle = document.querySelector("#toggle-mode");
themeToggle.addEventListener("click", (e) => {
  if (document.body.classList.contains("light-mode")) enableDarkMode();
  else enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
  console.log("dark theme enabled");
}
function enableLightMode() {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
  console.log("light theme enabled");
}

function setDefaultMode() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    enableDarkMode();
}

document.onload = setDefaultMode();

let sideMenuButtons = Array.from(document.getElementsByClassName("menu__item"));

for (let i = 0; i < sideMenuButtons.length; i++) {
  sideMenuButtons[i].addEventListener("click", (e) => {
    for (const elem of sideMenuButtons) {
      if (elem.classList.contains("menu__item_active"))
        elem.classList.remove("menu__item_active");
      elem.style.borderRadius = "0";
    }
    sideMenuButtons[i].classList.add("menu__item_active");
    updateBorders(sideMenuButtons, i);
  });
}
function updateBorders(items, index) {
  const bRad = "0.5em";
  items[0].style.borderRadius = `0 ${bRad} ${index === 1 ? bRad : 0} 0`;
  items[items.length - 1].style.borderRadius = `0 ${
    index === items.length - 2 ? bRad : 0
  } ${bRad} 0`;
  if (index > 1) {
    items[index - 1].style.borderRadius = `0 0 ${bRad} 0`;
  }
  if (index < items.length - 2) {
    items[index + 1].style.borderRadius = `0 ${bRad} 0 0`;
  }
}
