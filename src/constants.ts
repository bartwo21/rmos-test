export const CARS = [
    { id: "1", make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { id: "2", make: "Ford", model: "F-Series", price: 33850, electric: false },
    { id: "3", make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { id: "4", make: "Chevrolet", model: "Silverado", price: 45000, electric: false },
    { id: "5", make: "Toyota", model: "Camry", price: 32500, electric: false },
    { id: "6", make: "Ford", model: "Mustang", price: 49990, electric: false },
    { id: "7", make: "Chevrolet", model: "Bolt", price: 36600, electric: true },
    { id: "8", make: "Ford", model: "F-150", price: 59990, electric: false },
    { id: "9", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "10", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "11", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "12", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "13", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "14", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "15", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "16", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "17", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "18", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "19", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "20", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "21", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "22", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "23", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "24", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "25", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "26", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "27", make: "Toyota", model: "Prius", price: 29600, electric: true },
    { id: "28", make: "Chevrolet", model: "Equinox", price: 32500, electric: false },
    { id: "29", make: "Toyota", model: "Prius", price: 29600, electric: true },
    
]

export const PAGINATION_ENABLED = true;
export const PAGINATION_PAGE_SIZE = 10;
export const PAGINATION_PAGE_SIZE_SELECTOR = [10, 20, 50];

export const MODEL_OPTIONS = ["Model Y", "Model 3", "Model X", "Model S"];

export const DEFAULT_FORM_DATA = {
    make: "",
    model: "",
    price: "",
    electric: false
};

export const DEFAULT_COL_DEF = {
    flex: 1,
};

export const PRICE_RANGES_OPTIONS = [
    { label: "All", min: 0, max: Infinity },
    { label: "0 - 30,000$", min: 0, max: 30000 },
    { label: "30,000$ - 50,000$", min: 30000, max: 50000 },
    { label: "50,000$ - 70,000$", min: 50000, max: 70000 },
    { label: "70,000$+", min: 70000, max: Infinity }
]
