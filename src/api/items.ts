import { FoodCategory, FoodDetail } from "../types/item";
import { api } from "./index";

function wait() {
    return new Promise((resolve) => {
        setTimeout(resolve, 12000);
    });
}

export const getRandomFoods = async (): Promise<FoodCategory> => {
    const { data } = await api.get<FoodCategory>("/items/random");
    return data;
};

export const getFoodById = async (id: string): Promise<FoodDetail> => {
    const { data } = await api.get<FoodDetail>(`/texts/${id}`);
    return data;
};
