import { createContext, useContext, useState } from "react";
import { FoodCategory } from "../types/item";

interface FoodContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    foods: FoodCategory | null;
    setFoods: (foodList: FoodCategory | null) => void;
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState<FoodCategory | null>(null);

    return (
        <FoodContext.Provider value={{ loading, setLoading, foods, setFoods }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => {
    const context = useContext(FoodContext);
    if (!context) throw new Error("useFood must be used inside FoodProvider");
    return context;
};