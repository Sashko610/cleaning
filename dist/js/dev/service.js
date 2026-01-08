import "./popup.min.js";
import "./button.min.js";
import "./owner.min.js";
import "./hero.min.js";
import "./area.min.js";
import "./faq.min2.js";
import "./common.min.js";
const productOldPrices = document.querySelectorAll(".product__price--old span");
productOldPrices.forEach((productOldPrice) => {
  if (!productOldPrice.innerHTML) {
    productOldPrice.closest(".product__price--old").remove();
  }
});
