import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

const cartProducts = getCartProductFromLS();

const filterProducts = products.filter((curProd)=> {
  return cartProducts.some((curElem)=> curElem.id === curProd.id);
})


const cartElement = document.querySelector("#productsCartContainer") 
const templateContainer = document.querySelector("#productCartTemplate") 

const showCartProduct = ()=>{
  filterProducts.forEach((curProd)=>{
    const {id, name, image, stock, category, price} = curProd;

    let productClone = document.importNode(templateContainer.content, true)

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent = lSActualData.price;

    productClone.querySelector(".remove-to-cart-button").addEventListener("click",(event)=> removeProdFromCart(id));


    productClone.querySelector(".stockElement").addEventListener("click",(event)=> incrementDecrement(event, id, stock, price));


    cartElement.appendChild(productClone)
  })
}

// showing the cartProducts
showCartProduct();

// console.log(filterProducts);

// calculate the cart total in our cartProducts page
updateCartProductTotal();