import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>🍔 Food Express</h2>
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

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <button className="cart-btn">🛒 Cart</button>
      </div>
    </header>
  );
}

export default Header;