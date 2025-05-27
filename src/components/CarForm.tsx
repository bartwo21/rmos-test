"use client";

import React, { useState } from "react";
import { DEFAULT_FORM_DATA } from "../constants";
import { Car } from "@/types";

interface CarFormProps {
    onAddCar: (car: Car) => void;
}

function CarForm({ onAddCar }: CarFormProps) {
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.make && formData.model && formData.price) {
            const newRow = {
                id: crypto.randomUUID(),
                make: formData.make,
                model: formData.model,
                price: parseFloat(formData.price),
                electric: formData.electric
            };
            onAddCar(newRow);
            setFormData(DEFAULT_FORM_DATA);
        }
    };

    return (
        <div className="mb-8 bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Car</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                    <div>
                        <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                            Make
                        </label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={formData.make}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tesla"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                            Model
                        </label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Model Y"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                            placeholder="64950"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="flex items-center mt-6">
                        <input
                            type="checkbox"
                            id="electric"
                            name="electric"
                            checked={formData.electric}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="electric" className="ml-2 block text-sm text-gray-700">
                            Electric Car
                        </label>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
                    >
                        Add Car
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CarForm; 