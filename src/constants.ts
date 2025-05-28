export const CARS = [
    { 
        id: 1, 
        make: "Tesla", 
        model: "Model Y", 
        color: "White",
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
        color: "Blue",
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
        color: "Red",
        price: 29600, 
        electric: false, 
        date: "08/05/2023",
        serviceRecords: [
            { serviceId: 5, type: "Inspection", date: "20/05/2023", cost: 100, description: "Annual inspection", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 4, 
        make: "BMW", 
        model: "X5", 
        color: "Black",
        price: 67000, 
        electric: false, 
        date: "12/02/2023",
        serviceRecords: [
            { serviceId: 6, type: "Engine Tune-up", date: "25/03/2023", cost: 350, description: "Engine performance optimization", mechanic: "Mike Johnson" },
            { serviceId: 7, type: "Oil Change", date: "15/04/2023", cost: 140, description: "Regular maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 5, 
        make: "Mercedes", 
        model: "C-Class", 
        color: "Silver",
        price: 52500, 
        electric: false, 
        date: "30/04/2023",
        serviceRecords: [
            { serviceId: 8, type: "Transmission Service", date: "10/05/2023", cost: 200, description: "Transmission fluid change", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 6, 
        make: "Audi", 
        model: "A4", 
        color: "Gray",
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
        make: "Nissan", 
        model: "Leaf", 
        color: "Green",
        price: 36600, 
        electric: true, 
        date: "25/07/2023",
        serviceRecords: [
            { serviceId: 11, type: "Battery Check", date: "10/08/2023", cost: 120, description: "Electric battery diagnostics", mechanic: "John Smith" }
        ]
    },
    { 
        id: 8, 
        make: "Honda", 
        model: "Civic", 
        color: "White",
        price: 28990, 
        electric: false, 
        date: "03/08/2023",
        serviceRecords: [
            { serviceId: 12, type: "Brake Service", date: "20/08/2023", cost: 280, description: "Heavy-duty brake maintenance", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 9, 
        make: "Hyundai", 
        model: "Elantra", 
        color: "Blue",
        price: 24600, 
        electric: false, 
        date: "14/09/2023",
        serviceRecords: [
            { serviceId: 13, type: "Hybrid System Check", date: "01/10/2023", cost: 150, description: "Hybrid system diagnostics", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 10, 
        make: "Kia", 
        model: "Optima", 
        color: "Red",
        price: 32500, 
        electric: false, 
        date: "27/10/2023",
        serviceRecords: [
            { serviceId: 14, type: "Oil Change", date: "15/11/2023", cost: 130, description: "Regular maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 11, 
        make: "Mazda", 
        model: "CX-5", 
        color: "Black",
        price: 35600, 
        electric: false, 
        date: "05/11/2023",
        serviceRecords: [
            { serviceId: 15, type: "Tire Replacement", date: "20/11/2023", cost: 400, description: "All-season tire replacement", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 12, 
        make: "Subaru", 
        model: "Outback", 
        color: "Silver",
        price: 38500, 
        electric: false, 
        date: "19/12/2023",
        serviceRecords: [
            { serviceId: 16, type: "Winter Service", date: "05/01/2024", cost: 200, description: "Winter preparation service", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 13, 
        make: "Volkswagen", 
        model: "Jetta", 
        color: "Gray",
        price: 31600, 
        electric: false, 
        date: "07/01/2024",
        serviceRecords: [
            { serviceId: 17, type: "Software Update", date: "20/01/2024", cost: 80, description: "System software update", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 14, 
        make: "Lexus", 
        model: "RX", 
        color: "White",
        price: 58500, 
        electric: false, 
        date: "16/02/2024",
        serviceRecords: [
            { serviceId: 18, type: "Air Filter Change", date: "01/03/2024", cost: 60, description: "Air filter replacement", mechanic: "John Smith" }
        ]
    },
    { 
        id: 15, 
        make: "Acura", 
        model: "TLX", 
        color: "Blue",
        price: 44600, 
        electric: false, 
        date: "28/03/2024",
        serviceRecords: [
            { serviceId: 19, type: "Coolant Service", date: "10/04/2024", cost: 110, description: "Coolant system maintenance", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 16, 
        make: "Infiniti", 
        model: "Q50", 
        color: "Red",
        price: 41500, 
        electric: false, 
        date: "11/04/2024",
        serviceRecords: [
            { serviceId: 20, type: "Belt Replacement", date: "25/04/2024", cost: 180, description: "Serpentine belt replacement", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 17, 
        make: "Cadillac", 
        model: "XT5", 
        color: "Black",
        price: 55600, 
        electric: false, 
        date: "23/05/2024",
        serviceRecords: [
            { serviceId: 21, type: "Battery Calibration", date: "05/06/2024", cost: 90, description: "Battery system calibration", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 18, 
        make: "Lincoln", 
        model: "Aviator", 
        color: "Silver",
        price: 62500, 
        electric: false, 
        date: "09/06/2024",
        serviceRecords: [
            { serviceId: 22, type: "Spark Plug Service", date: "20/06/2024", cost: 150, description: "Spark plug replacement", mechanic: "John Smith" }
        ]
    },
    { 
        id: 19, 
        make: "Genesis", 
        model: "G90", 
        color: "Gray",
        price: 72600, 
        electric: false, 
        date: "17/07/2024",
        serviceRecords: [
            { serviceId: 23, type: "AC Service", date: "01/08/2024", cost: 120, description: "Air conditioning maintenance", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 20, 
        make: "Volvo", 
        model: "XC90", 
        color: "White",
        price: 68500, 
        electric: false, 
        date: "02/08/2024",
        serviceRecords: [
            { serviceId: 24, type: "Fuel System Clean", date: "15/08/2024", cost: 100, description: "Fuel system cleaning", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 21, 
        make: "Jaguar", 
        model: "F-Pace", 
        color: "Blue",
        price: 59600, 
        electric: false, 
        date: "13/09/2024",
        serviceRecords: [
            { serviceId: 25, type: "Routine Check", date: "25/09/2024", cost: 85, description: "Routine system check", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 22, 
        make: "Land Rover", 
        model: "Discovery", 
        color: "Red",
        price: 64500, 
        electric: false, 
        date: "26/10/2024",
        serviceRecords: [
            { serviceId: 26, type: "Exhaust Service", date: "05/11/2024", cost: 220, description: "Exhaust system maintenance", mechanic: "John Smith" }
        ]
    },
    { 
        id: 23, 
        make: "Porsche", 
        model: "Macan", 
        color: "Black",
        price: 78600, 
        electric: false, 
        date: "04/11/2024",
        serviceRecords: [
            { serviceId: 27, type: "Wiper Replacement", date: "15/11/2024", cost: 45, description: "Windshield wiper replacement", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 24, 
        make: "Maserati", 
        model: "Levante", 
        color: "Silver",
        price: 89500, 
        electric: false, 
        date: "18/12/2024",
        serviceRecords: [
            { serviceId: 28, type: "Battery Test", date: "30/12/2024", cost: 50, description: "Battery performance test", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 25, 
        make: "Alfa Romeo", 
        model: "Stelvio", 
        color: "Gray",
        price: 56600, 
        electric: false, 
        date: "06/01/2025",
        serviceRecords: [
            { serviceId: 29, type: "Light Service", date: "15/01/2025", cost: 70, description: "Headlight and taillight service", mechanic: "Tom Brown" }
        ]
    },
    { 
        id: 26, 
        make: "McLaren", 
        model: "GT", 
        color: "White",
        price: 210500, 
        electric: false, 
        date: "15/02/2025",
        serviceRecords: [
            { serviceId: 30, type: "Suspension Check", date: "25/02/2025", cost: 160, description: "Suspension system inspection", mechanic: "John Smith" }
        ]
    },
    { 
        id: 27, 
        make: "Lamborghini", 
        model: "Urus", 
        color: "Blue",
        price: 225600, 
        electric: false, 
        date: "27/03/2025",
        serviceRecords: [
            { serviceId: 31, type: "Alignment Service", date: "05/04/2025", cost: 95, description: "Wheel alignment service", mechanic: "Mike Johnson" }
        ]
    },
    { 
        id: 28, 
        make: "Ferrari", 
        model: "Roma", 
        color: "Red",
        price: 245500, 
        electric: false, 
        date: "10/04/2025",
        serviceRecords: [
            { serviceId: 32, type: "Radiator Service", date: "20/04/2025", cost: 190, description: "Radiator cleaning and maintenance", mechanic: "Sarah Wilson" }
        ]
    },
    { 
        id: 29, 
        make: "Bentley", 
        model: "Bentayga", 
        color: "Black",
        price: 195600, 
        electric: false, 
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
    editable: true,
    enableCellChangeFlash: true
};

export const PRICE_RANGES_OPTIONS = [
    { label: "All", min: 0, max: Infinity },
    { label: "0 - 30,000$", min: 0, max: 30000 },
    { label: "30,000$ - 50,000$", min: 30000, max: 50000 },
    { label: "50,000$ - 70,000$", min: 50000, max: 70000 },
    { label: "70,000$+", min: 70000, max: Infinity }
]
