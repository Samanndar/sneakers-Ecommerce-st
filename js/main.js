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
  function elToggle() {
    burger.classList.toggle("burger-active");
    nav.classList.toggle("nav-active");
    body.classList.toggle("body-active");

  }
  burger.addEventListener("click", elToggle);
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


  // BASKET SNEAKERS ADD TO CART
  const elBasketParent = document.querySelector(".header__img-box")
  const elBasket = document.querySelector(".header__img-basket");
  const elBasketBoxs = document.querySelector(".cart-basket__boxs");
  const btnBasketToCart = document.querySelector(".basket__cart-button");
  const elCartBasketBox = document.querySelector(".cart-basket__box");
  const fetchData = "./data.json";
  let elBasketQuantity = document.createElement("span");
  let elCreateProduct = document.createElement("div");
  elBasketQuantity.classList.add("header__quantity");
  // LOGIC BASKET PRICE
  function addToCart() {
    elBasketParent.appendChild(elBasketQuantity);
    elBasketQuantity.innerHTML = countValue.textContent;
    resData(fetchData)
  }
  btnBasketToCart.addEventListener("click", addToCart);

  elCartBasketBox.addEventListener("click", function(e) {
    if (e.target.className == "sneakers-basket__delete") {
      elBasketQuantity.innerHTML = "";
      elBasketQuantity.classList.remove("header__quantity");
      elCartBasketBox.innerHTML = `
        <div class="cart-basket__item">
          Your cart is empty.
        </div>
      `
      console.log("bosildi", e.target.className)
    }
  });

  // FETCH DATA.JSON
  function resData(fetchdata) {
    fetch(fetchdata)
      .then(res => res.json())
      .then(data => {
        let dataProduct = data.products;
        elCreateProduct.classList.add("cart-basket__sneakers");
        dataProduct.forEach(data => {    
          elCreateProduct.innerHTML = `
            <div class="sneakers-basket__box">
              <div class="sneakers-basket__img-box">
                <img src="./images/${data.img}" alt="product" class="sneakers-basket__img" width="50" height="50">
              </div>
              <div class="sneakers-basket__desc">
                <h3 class="sneakers-basket__title">${data.title}</h3>
                <span class="sneakers-basket__price">$${data.price}</span>
                <span class="sneakers-basket__count">x ${countValue.textContent}</span>
                <span class="sneakers-basket__total">$${countValue.textContent * data.price}</span>
              </div>
              <div class="sneakers-basket__delete-sneaker">
                <img src="./images/${data.img_delete}" alt="cart-delete" class="sneakers-basket__delete">
              </div>
            </div>
            <div class="sneakers-basket__checkout-btn">
              <button class="sneakers-basket__checkout" type="button">Checkout</button>
            </div>
          `
          elCartBasketBox.innerHTML = "";
          elCartBasketBox.appendChild(elCreateProduct)
        }) 
      })
  }

  function elBasketToggle() {
    elBasketBoxs.classList.toggle("cart-basket__boxs-active")
  }
  elBasket.addEventListener("click", elBasketToggle);

}

document.addEventListener('DOMContentLoaded', init);
