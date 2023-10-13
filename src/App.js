import { useState, useContext } from "react";
import "./App.css";
import { cartContext } from "./CartContext";
import { Route, Routes, Navigate} from "react-router-dom";
import Vegetables from "./pages/vegatable";
import Menu from "./pages/menu";
import { useEffect } from "react";

function App() {
  const context = useContext(cartContext);
 
  const [isCartOpen, setIsCartOpen] = useState(false);

  function closeCartHandler() {
    setIsCartOpen(false);
  }

  function openCartHandler() {
    setIsCartOpen(true);
  }
  function openCartHandlerParent() {
    openCartHandler();
    context.checkout();
  }

  return (
    <div className="display">
      {/* <Header onOpenCart={openCartHandlerParent} /> */}
      {/* <div className={isCartOpen ? "overlay" : "hidden"} />
      <Cart isCartOpen={isCartOpen} onCloseCart={closeCartHandler} />
       */}

       {/* hello comment */}


      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
