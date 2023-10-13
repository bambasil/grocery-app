import Header from "../components/Header";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./vegetable.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import CarrotImage from "../components/carrotItem.png";
import { useContext } from "react";
import { testContext } from "../TestContext";
import { Button } from "@mui/material";

function Items() {
  const context = useContext(testContext);
  const navigate = useNavigate();
  console.log(context);

  function navigateBackHandler() {
    navigate("/menu");
  }
  const products = [
    {
      name: "Carrots",
      price: 1,
      description: "Garnden carrots",
      count: 0,
      image: CarrotImage,
    },
    {
      name: "Potatoes",
      price: 3,
      description: "Baking potatos loose",
      count: 0,
      image:
        "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
    },
    {
      name: "Tomatoes",
      price: 5,
      description: "Celebrity tomatoes",
      count: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ6jI-jzR_eeZPhg0_YzW0I0rLpAx4VB7Sm7NRE5L6eI8slwYRy4SY4NteeFWaeyO2rg&usqp=CAU",
    },
    {
      name: "Belsta broccoli",
      price: 3,
      description: "This is a broccoli",
      count: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMcbNeCou3Mmolf2q-4b1fqqlanpUjuaxyw&usqp=CAU",
    },
  ];
  return (
    <div>
      <Header />
      <div onClick={navigateBackHandler}>
        <ArrowBackIcon className="back-icon" />
      </div>
      {context.testItems.map((cartData) => {
        return (
          <div>
            {cartData.name}:{cartData.count}
            <Button
              onClick={function () {
                context.removeItemHandler(cartData);
              }}
              variant="outlined"
            >
              remove item
            </Button>
          </div>
        );
      })}
      <Button onClick={context.clearAllHandler} variant="outlined">
        Clear button
      </Button>

      <h1>Items</h1>

      {products.map(function (item) {
        return (
          <div className="item-box">
            <img src={item.image} />
            <div className="item-description">
              <span>{item.name}</span>
              <p>{item.description}</p>
              <p>{item.price}$</p>

              <div className="button-parent">
                <div>
                  <button
                    onClick={function () {
                      context.addToCartHandler(item);
                    }}
                    className="add-button"
                  >
                    ADD
                  </button>
                </div>
                <div className="button-child">
                  <div className="plus-button">
                    <AddIcon className="add-icon" />
                  </div>
                  <span>0</span>
                  <div className="minus-button">
                    <RemoveIcon className="remove-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
