function init () {
  // NUMBERS CONTROLS DECREMENT AND INCREMENT
  const MAX_COUNT = 10;
  const MIN_COUNT = 1;
  let countNum = 0;
  const countDecrement = document.querySelector(".count-wrapper__decrement");
  const countIncrement = document.querySelector(".count-wrapper__increment");
  const countValue = document.querySelector(".count-wrapper__value");

  function decrementCount() {
    if(countNum <= MIN_COUNT) {
      return;
    } else {
      countNum--;
      countValue.textContent = countNum;
    }
  }

  function increment() {
    if(countNum < MAX_COUNT) {
      countNum++
      countValue.textContent = countNum;
    } 
    return;
  }

  countDecrement.addEventListener("click", decrementCount);
  countIncrement.addEventListener("click", increment);

  // BURGER
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-active");
    nav.classList.toggle("nav-active");
    body.classList.toggle("body-active");

  })



}

document.addEventListener('DOMContentLoaded', init);
