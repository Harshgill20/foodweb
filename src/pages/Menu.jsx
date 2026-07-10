import React from "react";
import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    price: 69,
  },
  {
    id: 2,
    name:  "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    price: 349,
  },
  {
    id: 3,
    name: "French Fries",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
    price: 99,
  },
  {
    id: 4,
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    price: 249,
  },
  {
    id: 5,
    name: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
    price: 149,
  },
  {
    id: 6,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    price: 179,
  },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;