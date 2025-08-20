import React from "react";
import "./FoodItem.scss";
import { Food } from "../../types/item";

interface FoodItemProps {
    item: Food;
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
    return (
        <div
            className="food-item"
            style={{ backgroundColor: `#${item.color}` }}
        >
            <span className="food-name">{item.name}</span>
            {item.image && process.env.REACT_APP_API_URL && (
                <img
                    className="food-image"
                    src={process.env.REACT_APP_API_URL + item.image}
                    alt={item.name + " image"}
                />
            )}
        </div>
    );
};

export default FoodItem;
