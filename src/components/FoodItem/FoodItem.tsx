import React, { useEffect, useState } from "react";
import "./FoodItem.scss";
import { Food } from "../../types/item";
import { Link } from "react-router";

interface FoodItemProps {
    item: Food;
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
    const [visible, setVisible] = useState(false);
    const [loadedImg, setLoadedImg] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Link to={`/food/${item.id}`}
            className={`food-item ${visible ? "visible" : ""}`}
            style={{ backgroundColor: `#${item.color}` }}
        >
            <span className="food-name">{item.name}</span>
            {item.image && process.env.REACT_APP_API_URL && (
                <>
                    {!loadedImg && <div className="skeleton" />}
                    <img
                        className="food-image"
                        src={process.env.REACT_APP_API_URL + item.image}
                        alt={item.name + " image"}
                        loading="lazy"
                        onLoad={() => setLoadedImg(true)}
                    />
                </>
            )}
        </Link>
    );
};

export default FoodItem;
