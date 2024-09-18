import React, {useEffect } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image, cartItems,addToCart,removeFromCart}) => {

  
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id)
              }}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;