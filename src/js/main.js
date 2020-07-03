// import { useMap } from "./map";
document.addEventListener("DOMContentLoaded", () => {
  const $burger = document.querySelector(".header__burger");
  const $menu = document.querySelector(".header__menu");
  const $line = document.querySelector(".header__burger-line");
  const $link = document.querySelector(".header__link");
  const $list = document.querySelector(".header__list");
  const $body = document.getElementsByTagName("body");
  console.log($body);
  console.log(event);
  const addActive = () => {
    $burger.classList.toggle("header__burger--active");
    $line.classList.toggle("header__burger-line--active");
    $menu.classList.toggle("header__menu--active");
    // $body.classList.toggle("body__lock");

    console.log(event);
  };

  const removeActive = () => {
    $burger.classList.remove("header__burger--active");
    $line.classList.remove("header__burger-line--active");
    $menu.classList.remove("header__menu--active");
    console.log(event);
  };

  $burger.onclick = addActive;
  $list.onclick = removeActive;
});
//------------Применение background навигации------------
const headerBackGround = () => {
  const header = document.querySelector(".header::before");
  window.onscroll = () => {
    if (window.pageYOffset > 550) {
      console.log(header);
      header.classList.add("header__active");
    } else if (window.pageYOffset < 550) {
      header.classList.remove("header__active");
    }
  };
};

headerBackGround();
//---------------анимация ссылки нв верх-----------------

const iconToTop = document.querySelector(".avtomatica__top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 2300) {
    iconToTop.classList.add("avtomatica__top--active");
    iconToTop.classList.add("animate__fadeInDownBig");
  } else {
    iconToTop.classList.remove("avtomatica__top--active");
    iconToTop.classList.add("animate__fadeInDownBig");
  }
});

//------------- Расчет стоимости ворот-------------------

document.getElementById("calc").onclick = getResult;
document.getElementById("clear").onclick = clearCalculator;
const widthGate = document.querySelector(".calculator__item--width");
const heightGate = document.querySelector(".calculator__item--heigth");
const typeAvtomatic = document.getElementById("avtomatic");
const typeBrand = document.getElementById("manufacturer");
const $out = document.querySelector(".calculator__cost");

function getResult() {
  if (widthGate.value !== "" && heightGate.value !== "") {
    let square =
      (Number(widthGate.value) / 1000) * (Number(heightGate.value) / 1000);
    console.log(typeof typeBrand.value);
    let cost = square * Number(typeBrand.value) + Number(typeAvtomatic.value);
    $out.innerHTML = `${cost} $`;
  } else alert("Введите размеры ворот !");
}

// Сброс калькулятора
function clearCalculator() {
  widthGate.value = "";
  heightGate.value = "";
  $out.innerHTML = "";
}

typeAvtomatic.onchange = getResult;
typeBrand.onchange = getResult;
