import { cartContext } from "../CartContext";
import { useContext, useState } from "react";
import "./cart.css";
import Checkout from "./Checkout";

function Cart({ isCartOpen, onCloseCart }) {
  const context = useContext(cartContext);
  console.log(context)

  return (
    <div className={isCartOpen ? "cart-container" : "hidden"}>
      <div className="cart-heading">
        <p>CART</p>
        <button
          onClick={onCloseCart}
          className={isCartOpen ? "close-btn" : "hidden"}
        >
          CLOSE
        </button>
      </div>

      {context.cartItems.map(function (data, index) {
        return (
          <div key={index}>
            {data.name} ${data.price * data.count} count:{data.count}
            <button
              onClick={function () {
                context.remove(data, index);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button onClick={context.clear}>Clear the Cart</button>
      <div className="checkout-container">
        <p className="subtotal-box">SUBTOTAL ({context.checkoutDetail.totalcount} ITEMS)</p>
        <button className="checkout-btn" onClick={context.checkout}>
          CHECKOUT
        </button>
      </div>
      <Checkout />
    </div>
  );
}

export default Cart;
