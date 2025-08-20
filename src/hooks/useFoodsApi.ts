import { useFood } from "../context/FoodContext";
import { getRandomFoods, getFoodById } from "../api/items";
import { Food, FoodDetail } from "../types/item";

export const useFoodsApi = () => {
    const { setLoading, setFoods, setFoodDetail, foods } = useFood();

    const fetchRandomFoods = async () => {
        setLoading(true);
        try {
            const foods = await getRandomFoods();
            setFoods(foods);
        } catch (error: any) {
            console.error("Error:", error);
            setFoods(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchFoodById = async (id: string) => {
        setLoading(true);
        try {
            if (!foods || !foods?.items) {
                throw new Error("Foods not loaded.");
            }
            const food = foods.items.find((f) => f.id === id);
            if (!food) {
                throw new Error(`Food with ID ${id} not found.`)
            }
            const foodDetail = await getFoodById(id);
            const fullDetail: Food & FoodDetail = {
                ...food,
                ...foodDetail,
            };
            setFoodDetail(fullDetail);
        } catch (error: any) {
            console.error("Error:", error);
            setFoodDetail(null);
        } finally {
            setLoading(false);
        }
    };

    return { fetchRandomFoods, fetchFoodById };
};
