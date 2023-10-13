import Header from "../components/Header";
import SearchAppBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import HomeSlider from "../components/Slider";

function Menu() {
  return (
    <div>
      <Header />
      <SearchAppBar />
      <HomeSlider />
      <Categories />
      <ProductList />
    </div>
  );
}

export default Menu;
