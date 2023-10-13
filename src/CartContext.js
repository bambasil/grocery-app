import { react, createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutDetail, setCheckoutDetail] = useState({
    price: 0,
    items: [],
    totalcount: 0,
    shippingFee: 0,
  });

  function addedToCartHandler(cartItem, itemCount) {
    const isItemAlreadyAvailable = cartItems.find(function (data) {
      return data.name === cartItem.name;
    });

    let newCartItems;
    if (isItemAlreadyAvailable !== undefined) {
      newCartItems = cartItems.map(function (data) {
        if (isItemAlreadyAvailable.name === data.name) {
          isItemAlreadyAvailable.count =
            isItemAlreadyAvailable.count + Number(itemCount);
          return isItemAlreadyAvailable;
        } else {
          return data;
        }
      });
    } else {
      cartItem.count = Number(itemCount);
      newCartItems = [...cartItems, cartItem];
    }

    setCartItems(newCartItems);
  }


  function clearAllHandler() {
    setCartItems([]);
    setCheckoutDetail({
      price: 0,
      items: [],
      totalcount: 0,
      shippingFee: 0,
    });
  }

  function removeItemHandler(data, index) {
    let changedItems;
    if (data.count == 1) {
      changedItems = cartItems.filter(function (data, indexTwo) {
        return index !== indexTwo;
      });
    } else {
      changedItems = cartItems.map(function (item) {
        if (item.name === data.name) {
          item.count = item.count - 1;
          return item;
        } else {
          return item;
        }
      });
    }

    setCartItems(changedItems);

    let cartCount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartCount = cartCount + cartItems[i].count;
      setCheckoutDetail({
        totalcount: cartCount,
      });
    }
  }

  function checkoutHandler() {
    let priceSum = 0;
    let shippingFee = 3;
    let cartCount = 0;
    console.log(cartItems);
    for (let i = 0; i < cartItems.length; i++) {
      priceSum = priceSum + cartItems[i].price;
      priceSum = priceSum * cartItems[i].count;
      cartCount = cartCount + cartItems[i].count;
    }
    if (priceSum < 100 && cartCount !== 0) {
      priceSum = priceSum + shippingFee;
    } else {
      shippingFee = 0;
    }

    setCheckoutDetail({
      price: priceSum,
      items: cartItems,
      totalcount: cartCount,
      shippingFee,
    });
  }

  return (
    <cartContext.Provider
      value={{
        handler: addedToCartHandler,
        cartItems,
        clear: clearAllHandler,
        remove: removeItemHandler,
        checkout: checkoutHandler,
        checkoutDetail,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
