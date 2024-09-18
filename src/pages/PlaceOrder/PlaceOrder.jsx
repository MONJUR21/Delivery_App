import React from "react";
import "./PlaceOrder.css";
const PlaceOrder = ({calculateTotalCartItems,totalPrice}) => {
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivary Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code"/>
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder="Phone"/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              {calculateTotalCartItems()>0?<p>${2}</p>:<p>${0}</p>}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {calculateTotalCartItems()>0?<b>${totalPrice+2}</b>:<b>${0}</b>}
              
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
