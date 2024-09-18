import React from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category,addToCart,cartItems,removeFromCart}) => {
  

  return (
    <div className="food-display" id="food-diplay">
      <h2>Top dishes on you.</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          if (category === "All" || category === food.category) {
            return (
              <FoodItem
                key={index}
                id={food._id}
                name={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
                food={food}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItems={cartItems}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
