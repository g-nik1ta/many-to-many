import { useFood } from "../context/FoodContext";
import { getRandomFoods, getFoodById } from "../api/items";

export const useFoodsApi = () => {
    const { setLoading, setFoods } = useFood();

    const fetchRandomFoods = async () => {
        setLoading(true);
        try {
            const foods = await getRandomFoods();
            setFoods(foods);
        } catch (error: any) {
            console.error("Error:", error);
            setFoods(null)
        } finally {
            setLoading(false);
        }
    };

    const fetchFoodById = async (id: number) => {
        setLoading(true);
        try {
            const food = await getFoodById(id);
            return food;
        } catch (error: any) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { fetchRandomFoods, fetchFoodById };
};
