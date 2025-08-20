import { useEffect } from "react";
import "./FoodList.scss";
import ULoader from "../UComponents/ULoader/ULoader";
import { useFood } from "../../context/FoodContext";
import { useFoodsApi } from "../../hooks/useFoodsApi";
import FoodItem from "../FoodItem/FoodItem";

const FoodList = () => {
    const { loading, foods } = useFood();
    const { fetchRandomFoods } = useFoodsApi();

    useEffect(() => {
        fetchRandomFoods()
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
                    <FoodItem key={item.id} item={item} />
                ))
            ) : (
                <p className="no-data">No data available</p>
            )}
        </section>
    );
};

export default FoodList;
