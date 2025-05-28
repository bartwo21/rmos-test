export const CARS = [
    { 
        id: 1, 
        make: "Tesla", 
        model: "Model Y", 
        price: 64950, 
        electric: true, 
        date: "15/03/2023",
        serviceRecords: [
            { serviceId: 1, type: "Oil Change", date: "10/04/2023", cost: 150, description: "Regular maintenance", mechanic: "John Smith" },
            { serviceId: 2, type: "Tire Rotation", date: "20/05/2023", cost: 80, description: "Tire maintenance", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 2, 
        make: "Ford", 
        model: "F-Series", 
        price: 33850, 
        electric: false, 
        date: "22/01/2023",
        serviceRecords: [
            { serviceId: 3, type: "Brake Service", date: "15/02/2023", cost: 250, description: "Brake pad replacement", mechanic: "Sarah Wilson" },
            { serviceId: 4, type: "Oil Change", date: "10/03/2023", cost: 120, description: "Regular maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 3, 
        make: "Toyota", 
        model: "Corolla", 
        price: 29600, 
        electric: false, 
        date: "08/05/2023",
        serviceRecords: [
            { serviceId: 5, type: "Inspection", date: "20/05/2023", cost: 100, description: "Annual inspection", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 4, 
        make: "Chevrolet", 
        model: "Silverado", 
        price: 45000, 
        electric: false, 
        date: "12/02/2023",
        serviceRecords: [
            { serviceId: 6, type: "Engine Tune-up", date: "25/03/2023", cost: 350, description: "Engine performance optimization", mechanic: "Mike Johnson" },
            { serviceId: 7, type: "Oil Change", date: "15/04/2023", cost: 140, description: "Regular maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 5, 
        make: "Toyota", 
        model: "Camry", 
        price: 32500, 
        electric: false, 
        date: "30/04/2023",
        serviceRecords: [
            { serviceId: 8, type: "Transmission Service", date: "10/05/2023", cost: 200, description: "Transmission fluid change", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 6, 
        make: "Ford", 
        model: "Mustang", 
        price: 49990, 
        electric: false, 
        date: "18/06/2023",
        serviceRecords: [
            { serviceId: 9, type: "Performance Check", date: "01/07/2023", cost: 180, description: "Performance diagnostics", mechanic: "Tom Brown" },
            { serviceId: 10, type: "Oil Change", date: "20/07/2023", cost: 160, description: "High-performance oil", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 7, 
        make: "Chevrolet", 
        model: "Bolt", 
        price: 36600, 
        electric: true, 
        date: "25/07/2023",
        serviceRecords: [
            { serviceId: 11, type: "Battery Check", date: "10/08/2023", cost: 120, description: "Electric battery diagnostics", mechanic: "John Smith" }
        ]
    },
    { 
        id: 8, 
        make: "Ford", 
        model: "F-150", 
        price: 59990, 
        electric: false, 
        date: "03/08/2023",
        serviceRecords: [
            { serviceId: 12, type: "Brake Service", date: "20/08/2023", cost: 280, description: "Heavy-duty brake maintenance", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 9, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "14/09/2023",
        serviceRecords: [
            { serviceId: 13, type: "Hybrid System Check", date: "01/10/2023", cost: 150, description: "Hybrid system diagnostics", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 10, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "27/10/2023",
        serviceRecords: [
            { serviceId: 14, type: "Oil Change", date: "15/11/2023", cost: 130, description: "Regular maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 11, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "05/11/2023",
        serviceRecords: [
            { serviceId: 15, type: "Tire Replacement", date: "20/11/2023", cost: 400, description: "All-season tire replacement", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 12, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "19/12/2023",
        serviceRecords: [
            { serviceId: 16, type: "Winter Service", date: "05/01/2024", cost: 200, description: "Winter preparation service", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 13, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "07/01/2024",
        serviceRecords: [
            { serviceId: 17, type: "Software Update", date: "20/01/2024", cost: 80, description: "System software update", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 14, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "16/02/2024",
        serviceRecords: [
            { serviceId: 18, type: "Air Filter Change", date: "01/03/2024", cost: 60, description: "Air filter replacement", mechanic: "John Smith" }
        ]
    },
    { 
        id: 15, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "28/03/2024",
        serviceRecords: [
            { serviceId: 19, type: "Coolant Service", date: "10/04/2024", cost: 110, description: "Coolant system maintenance", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 16, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "11/04/2024",
        serviceRecords: [
            { serviceId: 20, type: "Belt Replacement", date: "25/04/2024", cost: 180, description: "Serpentine belt replacement", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 17, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "23/05/2024",
        serviceRecords: [
            { serviceId: 21, type: "Battery Calibration", date: "05/06/2024", cost: 90, description: "Battery system calibration", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 18, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "09/06/2024",
        serviceRecords: [
            { serviceId: 22, type: "Spark Plug Service", date: "20/06/2024", cost: 150, description: "Spark plug replacement", mechanic: "John Smith" }
        ]
    },
    { 
        id: 19, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "17/07/2024",
        serviceRecords: [
            { serviceId: 23, type: "AC Service", date: "01/08/2024", cost: 120, description: "Air conditioning maintenance", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 20, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "02/08/2024",
        serviceRecords: [
            { serviceId: 24, type: "Fuel System Clean", date: "15/08/2024", cost: 100, description: "Fuel system cleaning", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 21, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "13/09/2024",
        serviceRecords: [
            { serviceId: 25, type: "Routine Check", date: "25/09/2024", cost: 85, description: "Routine system check", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 22, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "26/10/2024",
        serviceRecords: [
            { serviceId: 26, type: "Exhaust Service", date: "05/11/2024", cost: 220, description: "Exhaust system maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 23, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "04/11/2024",
        serviceRecords: [
            { serviceId: 27, type: "Wiper Replacement", date: "15/11/2024", cost: 45, description: "Windshield wiper replacement", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 24, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "18/12/2024",
        serviceRecords: [
            { serviceId: 28, type: "Battery Test", date: "30/12/2024", cost: 50, description: "Battery performance test", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 25, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "06/01/2025",
        serviceRecords: [
            { serviceId: 29, type: "Light Service", date: "15/01/2025", cost: 70, description: "Headlight and taillight service", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 26, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "15/02/2025",
        serviceRecords: [
            { serviceId: 30, type: "Suspension Check", date: "25/02/2025", cost: 160, description: "Suspension system inspection", mechanic: "John Smith" }
        ]
    },
    { 
        id: 27, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "27/03/2025",
        serviceRecords: [
            { serviceId: 31, type: "Alignment Service", date: "05/04/2025", cost: 95, description: "Wheel alignment service", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 28, 
        make: "Chevrolet", 
        model: "Equinox", 
        price: 32500, 
        electric: false, 
        date: "10/04/2025",
        serviceRecords: [
            { serviceId: 32, type: "Radiator Service", date: "20/04/2025", cost: 190, description: "Radiator cleaning and maintenance", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 29, 
        make: "Toyota", 
        model: "Prius", 
        price: 29600, 
        electric: true, 
        date: "22/05/2025",
        serviceRecords: [
            { serviceId: 33, type: "Door Service", date: "01/06/2025", cost: 120, description: "Door mechanism maintenance", mechanic: "Tom Brown" }
        ]
    }
]

export const PAGINATION_ENABLED = true;
export const PAGINATION_PAGE_SIZE = 10;
export const PAGINATION_PAGE_SIZE_SELECTOR = [10, 20, 50];

export const DEFAULT_FORM_DATA = {
    make: "",
    model: "",
    price: "",
    electric: false,
    date: ""
};

export const DEFAULT_COL_DEF = {
    flex: 1,
    editable: true
};

export const PRICE_RANGES_OPTIONS = [
    { label: "All", min: 0, max: Infinity },
    { label: "0 - 30,000$", min: 0, max: 30000 },
    { label: "30,000$ - 50,000$", min: 30000, max: 50000 },
    { label: "50,000$ - 70,000$", min: 50000, max: 70000 },
    { label: "70,000$+", min: 70000, max: Infinity }
]
