import { cartContext } from "../CartContext";
import { useContext } from "react";
import './Checkout.css'

function Checkout() {
  const context = useContext(cartContext);
  console.log(context);
  return (
    <div>
      {context.checkoutDetail.items.map(function (data, index) {
        return <div key={index}>
          {data.name} ${data.price * data.count} count:{data.count}
        </div>;
      })}
      <p>Total price: {context.checkoutDetail.price} </p>
      <p>Total items: {context.checkoutDetail.totalcount}</p>

    </div>
  );
}

export default Checkout;
