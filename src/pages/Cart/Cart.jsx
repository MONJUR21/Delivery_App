import React, {useEffect } from "react";
import "./Cart.css";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = ({ cartItems, removeFromCart,calculateTotalCartItems,calculateTotalPrice}) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   calculateTotalPrice();
  // }, [cartItems]);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food, index) => {
          console.log(cartItems[food._id]);
          if (cartItems[food._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={food.image} alt="" />
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${food.price * cartItems[food._id]}</p>
                  <p onClick={() => removeFromCart(food._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${calculateTotalPrice()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              {calculateTotalCartItems()>0?<p>${2}</p>:<p>${0}</p>}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {calculateTotalCartItems()>0?<b>${calculateTotalPrice()+2}</b>:<b>${0}</b>}
              
            </div>
          </div>
          <button onClick={()=>{
            navigate("Delivery_App/order")
          }}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
