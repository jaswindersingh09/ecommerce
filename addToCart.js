import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock)=> {

  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let price = currentProdElem.querySelector(".productPrice").innerText;
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  
  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find((curProd)=> curProd.id === id);



  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity)
    price = Number(price * quantity);

      let updatedCart = {id, quantity, price};
      updatedCart = arrLocalStorageProduct.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd
      })
      localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))


    // show toast when product added to the cart 
    showToast("add", id)

  }


  if (existingProduct) {
    // alert("bhai duplicate hai")
    return false;
  }


  price = Number(price * quantity);
  quantity = Number(quantity);

  // let updateCart = {id, quantity, price};
  arrLocalStorageProduct.push({id, quantity, price})
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))


  // update the cart button value
  updateCartValue(arrLocalStorageProduct)

    // show toast when product added to the cart 
    showToast("add", id)


  // console.log(currentProdElem);
  // console.log(price, quantity);

}