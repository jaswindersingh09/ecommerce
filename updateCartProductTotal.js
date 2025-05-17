import { getCartProductFromLS } from "./getCartProducts"

export const updateCartProductTotal = ()=>{

const productSubTotal = document.querySelector(".productSubTotal");
const productFinalTotal = document.querySelector(".productFinalTotal");
const productTax = document.querySelector(".productTax").innerText;

  let localCartProducts = getCartProductFromLS();

  let initialValue = 0;

  let totalProductPrice = localCartProducts.reduce((accum, curElem)=>{
    let productPrice = parseInt(curElem.price) || 0
    return accum + productPrice;
  }, initialValue);

// console.log(totalProductPrice);

productSubTotal.textContent = `₹${totalProductPrice}`;
productFinalTotal.textContent = `₹${totalProductPrice + 50 }`;



}

  // productFinalTotal.innerText = localStoragePrice + productTax;