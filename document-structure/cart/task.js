"use strict";

const controlDec = document.querySelectorAll(".product__quantity-control_dec");
const controlInc = document.querySelectorAll(".product__quantity-control_inc");
let cart = document.querySelector(".cart__products");
let addCart = document.querySelectorAll(".product__add");

controlDec.forEach((el) =>
  el.addEventListener("click", () => {
    let count = el
      .closest(".product__quantity")
      .querySelector(".product__quantity-value");
    console.log();
    if (+count.textContent > 1) {
      count.textContent = Number(count.textContent) - 1;
    }
  })
);

controlInc.forEach((el) =>
  el.addEventListener("click", () => {
    let count = el
      .closest(".product__quantity")
      .querySelector(".product__quantity-value");
    count.textContent = Number(count.textContent) + 1;
  })
);

addCart.forEach((el) =>
  el.addEventListener("click", () => {
    const product = el.closest(".product");
    const idProduct = product.dataset.id;
    let count = product.querySelector(".product__quantity-value");
    if (!cart.querySelector(`[data-id="${idProduct}"]`)) {
      const src = product.querySelector("img").src;
      cart.innerHTML += `
      <div class="cart__product" data-id="${idProduct}">
      <img class="cart__product-image" src="${src}">
      <div class="cart__product-count">${count.textContent}</div>
      </div>
      `;
    } else {
      let cartProductCount = cart
        .querySelector(`[data-id="${idProduct}"]`)
        .querySelector(".cart__product-count");
      cartProductCount.textContent =
        Number(cartProductCount.textContent) + Number(count.textContent);
      console.log(count, cartProductCount);
    }
  })
);
