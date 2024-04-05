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
  // CAROUSEL-PRODUCT
  const imgItems = document.querySelectorAll(".carousel-product__img-item");
  const imgPoints = document.querySelectorAll(".carousel-product__point");
  const imgNextBtn = document.querySelector(".carousel-product__next");
  const imgPrevBtn = document.querySelector(".carousel-product__prev");
  let imgCount = 0;
  
  imgItems.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
  })

  imgPoints[imgCount].classList.add("carousel-product__point-active");
  
  function imgSlide() {
    imgItems.forEach(item => {
      item.style.transform = `translateX(-${imgCount * 100}%)`;
    })
    imgPoints.forEach(item => {
      item.classList.remove("carousel-product__point-active");
    })
  }

  function imgNext() {
    if (imgCount < imgItems.length - 1) {
      imgCount++
      imgSlide()
      imgPointActive()
    } else {
      imgCount = 0;
      imgSlide()
      imgPointActive()
    }
  }
  function imgPrev() {
    if (imgCount <= 0) {
      imgCount = imgItems.length - 1;
      imgSlide()
      imgPointActive()
    } else {
      imgCount--
      imgSlide()
      imgPointActive()
    }
  }
  function imgPointActive() {
    imgPoints[imgCount].classList.add("carousel-product__point-active");
  }
  imgPoints.forEach((item, index) =>{
    item.addEventListener("click", () => {
      imgCount = index;
      imgSlide()
      imgPointActive()
    })
  })

  imgNextBtn.addEventListener("click", imgNext);
  imgPrevBtn.addEventListener("click", imgPrev);
}

document.addEventListener('DOMContentLoaded', init);
