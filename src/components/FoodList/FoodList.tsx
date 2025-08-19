import { useEffect, useState } from "react";
import "./FoodList.scss";
import { getRandomFoods } from "../../api/items";
import { FoodCategory } from "../../types/item";
import ULoader from "../UComponents/ULoader/ULoader";

const FoodList = () => {
    const [foods, setFoods] = useState<FoodCategory | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getRandomFoods()
            .then(setFoods)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <section className="food-list">
                <ULoader width="75px" height="75px" />
            </section>
        );

    return (
        <section className="food-list">
            {foods?.items && foods.items.length > 0 ? (
                foods.items.map((item) => (
                    <span key={item.id}>{item.name}</span>
                ))
            ) : (
                <p>No data available</p>
            )}
        </section>
    );
};

export default FoodList;
