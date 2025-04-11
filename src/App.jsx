import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { food_list } from "./assets/assets";
import axios from "axios";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [countItems, setCountItems] = useState(0);
  
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (itemId,food) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
   
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const calculateTotalCartItems = () => {
    let total = 0;
    food_list.forEach((food) => {
      if (cartItems[food._id] > 0) {
        total += cartItems[food._id];
      }
    });
    setCountItems(total);
    return countItems;
  };
  const calculateTotalPrice = () => {
    let total = 0;
    food_list.forEach((food) => {
      if (cartItems[food._id] > 0) {
        total += food.price * cartItems[food._id];
      }
    });
    setTotalPrice(total);
    return totalPrice;
  };
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : ""}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} calculateTotalCartItems={calculateTotalCartItems}/>
        <Routes>
          <Route
            path="/Delivery_App/"
            element={
              <Home
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="Delivery_App/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                calculateTotalCartItems={calculateTotalCartItems}
                calculateTotalPrice={calculateTotalPrice}
                totalPrice={totalPrice}
              />
            }
          />
          <Route path="/Delivery_App/order" element={<PlaceOrder calculateTotalCartItems={calculateTotalCartItems} totalPrice={totalPrice}/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
