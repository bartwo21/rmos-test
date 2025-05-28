export interface Car {
    id: number;
    make: string;
    model: string;
    price: number;
    electric: boolean;
    date: string;
    serviceRecords: IServiceRecord[];
}

export interface PriceRange {
    label: string;
    min: number;
    max: number;
}

export interface IServiceRecord {
    serviceId: number;
    type: string;
    date: string;
    cost: number;
    description: string;
    mechanic: string;
}