import { useEffect } from "react";
import "./FoodList.scss";
import ULoader from "../../components/UComponents/ULoader/ULoader";
import { useFood } from "../../context/FoodContext";
import { useFoodsApi } from "../../hooks/useFoodsApi";
import FoodItem from "../../components/FoodItem/FoodItem";

const FoodList = () => {
    const { loading, foods } = useFood();
    const { fetchRandomFoods } = useFoodsApi();

    useEffect(() => {
        fetchRandomFoods();
    }, []);

    if (loading)
        return (
            <section className="food-list">
                <ULoader width="75px" height="75px" />
            </section>
        );

    return foods?.items && foods.items.length > 0 ? (
        <section className="food-list">
            {foods.items.map((item) => (
                <FoodItem key={item.id} item={item} />
            ))}
        </section>
    ) : (
        <p className="no-data">No data available.</p>
    );
};

export default FoodList;
