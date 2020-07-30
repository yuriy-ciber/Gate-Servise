import { useMap } from "./map";
useMap();

//***************Бургер меню*******************
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

// headerBackGround();
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

const bodyCalculator = document.querySelector(".calculator__body");
const heightGate = document.querySelector(".calculator__item--heigth");
const typeAvtomatic = document.getElementById("avtomatic");
const typeBrand = document.getElementById("manufacturer");
const $out = document.querySelector(".calculator__price-usd");
const $out_2 = document.querySelector(".calculator__price-grivna");

function getResult() {
  if (widthGate.value !== "" && heightGate.value !== "") {
    let square =
      (Number(widthGate.value) / 1000) * (Number(heightGate.value) / 1000);
    console.log(typeof typeBrand.value);
    let cost = square * Number(typeBrand.value) + Number(typeAvtomatic.value);
    let cost_2 = cost * 28.22;
    $out.innerHTML = `${cost} $`;
    $out_2.innerHTML = `${cost_2} грн`;
  } else alert("Введите размеры ворот !");
}

// Сброс калькулятора
function clearCalculator() {
  widthGate.value = "";
  heightGate.value = "";
  $out.innerHTML = "";
  $out_2.innerHTML = "";
}

typeAvtomatic.onchange = getResult;
typeBrand.onchange = getResult;

fetch(" https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    let curentData = new Date();
    document.querySelector(
      ".calculator__data"
    ).innerHTML += ` ${curentData.toLocaleString()}:`;
    let cursUsd = Number(data[0]["sale"]);
    document.querySelector(
      ".calculator__curs"
    ).innerHTML += ` ${cursUsd.toFixed(2)}`;
  });
