import { createContext, useContext, useState } from "react";
import { Food, FoodCategory, FoodDetail } from "../types/item";

interface FoodContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    foods: FoodCategory | null;
    setFoods: (foodList: FoodCategory | null) => void;
    foodDetail: Food & FoodDetail | null;
    setFoodDetail: (foodDetail: Food & FoodDetail | null) => void;
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState<FoodCategory | null>(null);
    const [foodDetail, setFoodDetail] = useState<Food & FoodDetail | null>(null);

    return (
        <FoodContext.Provider
            value={{
                loading,
                setLoading,
                foods,
                setFoods,
                foodDetail,
                setFoodDetail,
            }}
        >
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => {
    const context = useContext(FoodContext);
    if (!context) throw new Error("useFood must be used inside FoodProvider");
    return context;
};
