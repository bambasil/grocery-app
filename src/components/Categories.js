import "./Categories.css";
import Slider from "react-slick"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate()

 function onRouteVegetableHandler(){
  navigate('/vegetables')
 }
  return (
    <div className="category-body">
      <span className="category-title">Categories</span>
      {/* <Slider {...settings}> */}
      <div className="category-parent">
        <div
          className="category-child"
          style={{
            backgroundImage:
              "url(https://t4.ftcdn.net/jpg/01/43/52/19/360_F_143521939_M8tew58TRXKNRjXiBOk2u0qkQ8vnJpaW.jpg)",
          }}
          onClick={onRouteVegetableHandler}
        >
          Vegetables
        </div>
        <div
          className="category-child"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/wheat-grains-isolated-white-background-wheat-seeds-close-up_544249-2603.jpg?w=2000",
          }}
        >
          Grains
        </div>
        <div
          className="category-child"
          style={{
            backgroundImage:
              "url(https://t4.ftcdn.net/jpg/00/53/14/41/360_F_53144147_Zx2dgnSeefxIjOQ5cjD4PBdZF4m8M7sm.jpg",
          }}
        >
          Fruits
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
}

export default Categories;
