import "./Slider.css";
import Slider from "react-slick";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <span className="main-title">Recipes</span>
      <Slider {...settings}>
        <div className="recipe-parent">
          <div className="recipe-child">
            <div className="recipe-title">
              <p className="recipe-title--small">Desserts</p>
              <p className="recipe-title--big">Carrot cake</p>
            </div>
            <button className="ingr-button">Add ingredients</button>
          </div>
        </div>
        <div className="recipe-parent">
          <div className="recipe-child">
            <div className="recipe-title">
              <p className="recipe-title--small">Desserts</p>
              <p className="recipe-title--big">Carrot cake</p>
            </div>
            <button className="ingr-button">Add ingredients</button>
          </div>
        </div>
        <div className="recipe-parent">
          <div className="recipe-child">
            <div className="recipe-title">
              <p className="recipe-title--small">Desserts</p>
              <p className="recipe-title--big">Carrot cake</p>
            </div>
            <button className="ingr-button">Add ingredients</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
