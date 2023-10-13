


import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function Header({onOpenCart}) {
  return (
    <div className="header">
      <MenuIcon className="menu-icon" />
      <span>Home</span>
      <ShoppingCartIcon className="cart-icon" onClick={onOpenCart} />
    </div>
  );
}

export default Header;

