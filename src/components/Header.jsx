import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount, toggleCart }) {
  return (
    <header className="header">
      <div className="logo">
        <h2>🍔 FoodMap</h2>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="search" />
        <button className="submit">Submit</button>
      </div>
      <button className="cart-btn" onClick={toggleCart}>
          🛒 Cart ({cartCount})
        </button>
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
