import { createContext, useState } from "react";

export const testContext = createContext();

export function TestContextProvider({ children }) {
  const [testItems, setTestItems] = useState([]);

  function addToCartHandler(item) {
    const isItemInTheCart = testItems.find(function (data) {
      return item.name === data.name;
    });
    console.log(testItems);
    let newTestItems;
    if (isItemInTheCart === undefined) {
      newTestItems = item;
      newTestItems.count = newTestItems.count + 1;
      newTestItems = [...testItems, newTestItems];
    } else {
      newTestItems = testItems.map(function (data) {
        if (data.name === isItemInTheCart.name) {
          isItemInTheCart.count = isItemInTheCart.count + 1;
          return isItemInTheCart;
        } else {
          return data;
        }
      });
    }
    setTestItems(newTestItems);
  }

  function removeItemHandler(item) {
    let newTestItems;
    let isItemClickedOn;

    if (item.count === 1) {
      newTestItems = testItems.filter(function (data) {
        return data.name !== item.name;
      });
    } else {
      newTestItems = testItems.map(function (data) {
        if (item.name === data.name) {
          isItemClickedOn = data;
          isItemClickedOn.count = isItemClickedOn.count - 1;
          console.log(isItemClickedOn);
          return isItemClickedOn;
        } else {
          return data;
        }
      });
    }

    console.log(newTestItems);
    setTestItems(newTestItems);
  }

  function clearAllHandler() {
    setTestItems([]);
  }

  return (
    <testContext.Provider
      value={{
        addToCartHandler,
        testItems,
        clearAllHandler,
        removeItemHandler,
      }}
    >
      {children}
    </testContext.Provider>
  );
}
