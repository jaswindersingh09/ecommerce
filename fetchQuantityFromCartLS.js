import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id, price)=>{
const cartProducts = getCartProductFromLS();
  
let existngProduct = cartProducts.find((curProd)=> curProd.id === id);

let quantity = 1

if (existngProduct) {
  quantity = existngProduct.quantity
  price = existngProduct.price
}

return {quantity, price};

}