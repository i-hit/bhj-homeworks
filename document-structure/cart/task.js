"use strict";

const controlDec = document.querySelectorAll(".product__quantity-control_dec");
const controlInc = document.querySelectorAll(".product__quantity-control_inc");
let cart = document.querySelector(".cart__products");
let addCart = document.querySelectorAll(".product__add");

cart.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__remove")) {
    e.target.closest(".cart__product").remove();
  }
});

controlDec.forEach((el) =>
  el.addEventListener("click", () => {
    let count = el
      .closest(".product__quantity")
      .querySelector(".product__quantity-value");
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
    const ProductId = product.dataset.id;
    let count = product.querySelector(".product__quantity-value");
    const productImg = product.querySelector("img");
    const cartProduct = cart.querySelector(`[data-id="${ProductId}"]`);

    cart.closest(".cart").style.display = "block";

    if (!cartProduct) {
      cart.insertAdjacentHTML(
        "beforeEnd",
        `
      <div class="cart__product" data-id="${ProductId}">
      <img class="cart__product-image" src="${productImg.src}">
      <div class="cart__product-count">${count.textContent}</div>
      <a href="#" class="product__remove">&times;</a>
      </div>
      `
      );
    } else {
      let cartProductCount = cartProduct.querySelector(".cart__product-count");
      cartProductCount.textContent =
        Number(cartProductCount.textContent) + Number(count.textContent);

      const copyImg = productImg.cloneNode();
      const productImgLeft = productImg.getBoundingClientRect().left;
      const productImgTop = productImg.getBoundingClientRect().top;

      copyImg.style.cssText = `position: absolute; left: ${productImgLeft}px; top: ${productImgTop}px;`;
      product.appendChild(copyImg);

      const currentImgRect = cartProduct
        .querySelector("img")
        .getBoundingClientRect();
      const coordinateLeft =
        currentImgRect.left - copyImg.getBoundingClientRect().left;
      const coordinateTop =
        currentImgRect.top - copyImg.getBoundingClientRect().top;

      const start = Date.now();
      let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        if (timePassed >= 250) {
          copyImg.remove();
          clearInterval(timer);
          return;
        }
        draw(copyImg, "left", coordinateLeft);
        draw(copyImg, "top", coordinateTop);
      }, 20);
    }
  })
);

function draw(el, prop, target) {
  el.style[prop] = parseInt(el.style[prop]) + target / 12.5 + "px";
}
