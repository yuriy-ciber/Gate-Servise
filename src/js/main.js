import { glide } from "./slider";
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
    $body.classList.toggle("body__lock");

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
const viewIcon = () => {
  const iconToTop = document.querySelector(".avtomatica__top");
  window.onscroll = () => {
    if (window.pageYOffset > 2000) {
      iconToTop.classList.remove("animate__backOutRight");
      iconToTop.classList.add("animate__bounceInRight");
      iconToTop.classList.add("avtomatica__top--active");
    } else if (window.pageYOffset < 2000) {
      iconToTop.classList.remove("animate__bounceInRight");
      iconToTop.classList.add("animate__backOutRight");
      iconToTop.classList.remove("avtomatica__top--active");
    }
  };
};

viewIcon();

//--------------Анимация формы калькулятора----------------
const animateCalculator = () => {
  const bodyCalculator = document.querySelector(".calculator__body");
  const titleCalculator = document.querySelector(".calculator__title");
  window.onscroll = () => {
    if (window.pageYOffset > 9740) {
      titleCalculator.classList.add("animate__bounceInRight");
      titleCalculator.classList.remove("animate__bounceOutRight");
      bodyCalculator.classList.add("animate__bounceInLeft");
      bodyCalculator.classList.remove("animate__bounceOutLeft");
    } else if (window.pageYOffset < 9740) {
      titleCalculator.classList.remove("animate__bounceInRight");
      titleCalculator.classList.add("animate__bounceOutRight");
      bodyCalculator.classList.remove("animate__bounceInLeft");
      bodyCalculator.classList.add("animate__bounceOutLeft");
    }
  };
};
// animateCalculator();

//------------- Расчет стоимости ворот-------------------

document.getElementById("calc").onclick = getResult;

const widthGate = document.querySelector(".calculator__item--width");
const heightGate = document.querySelector(".calculator__item--heigth");
const typeAvtomatic = document.getElementById("avtomatic");
const typeBrand = document.getElementById("brand");

function getResult() {
  let square =
    (Number(widthGate.value) / 1000) * (Number(heightGate.value) / 1000);
  console.log(typeof typeBrand.value);
  let cost = square * Number(typeBrand.value) + Number(typeAvtomatic.value);
  let $out = document.querySelector(".calculator__cost");
  $out.innerHTML = `${cost} $`;

  console.log(cost);
}
typeAvtomatic.onchange = getResult;
typeBrand.onchange = getResult;
