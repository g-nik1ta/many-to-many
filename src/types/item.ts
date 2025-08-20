export interface ItemDetail {
    id: string;
    text: string;
}

export interface Food {
    id: string;
    name: string;
    image: string | null;
    color: string;
}

export interface FoodCategory {
    title: string;
    items: Food[];
}
