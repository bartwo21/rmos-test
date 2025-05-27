export interface Car {
    id: string;
    make: string;
    model: string;
    price: number;
    electric: boolean;
}

export interface PriceRange {
    label: string;
    min: number;
    max: number;
}