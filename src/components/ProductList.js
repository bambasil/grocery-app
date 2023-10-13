import { cartContext } from "../CartContext";
import { useContext, useState } from "react";

function ProductList() {
  const [itemCount, setItemCount] = useState(1);
  const context = useContext(cartContext);
  const products = [
    { name: "banana", price: 1, count: 0 },
    { name: "apple", price: 3, count: 0 },
    { name: "grapes", price: 5, count: 0 },
  ];

  function itemsOnChangeHandler(event) {
    setItemCount(event.target.value);
    console.log(event.target.value);
  }

  function onSubmithandler(itemCount, data) {
    console.log(itemCount, data);
    context.handler(data, itemCount);
  }

  return (
    <div>
      <h1>Items</h1>
   
      {products.map(function (data, index) {
        return (
          <div style={{ zIndex: 10 }} key={index}>
            {data.name}: ${data.price}
            <form
              onSubmit={function (event) {
                event.preventDefault();
                onSubmithandler(itemCount, data);
              }}
            >
              <button type="submit">Add to Cart</button>

              <input
                type="number"
                max="10"
                min="1"
                onChange={itemsOnChangeHandler}
                placeholder={"items #"}
              />
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
