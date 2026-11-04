import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart based on selected platform
  const addToCart = (item, platform, price) => {
    const cartItemId = `${item.id}-${platform}`;

    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map((i) =>
          i.cartItemId === cartItemId ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prevCart,
        { cartItemId, name: item.name, platform, price, qty: 1 },
      ];
    });
  };

  // Cart totals
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Header cartCount={cartCount} toggleCart={() => setIsCartOpen(!isCartOpen)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="cart-drawer">
          <h3>Your FoodMap Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="cart-item">
                <div>
                  <strong>{item.name}</strong> <small>({item.platform})</small>
                </div>
                <div>
                  ₹{item.price} × {item.qty}
                </div>
              </div>
            ))
          )}
          <h4>Total: ₹{cartTotal}</h4>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default App;
