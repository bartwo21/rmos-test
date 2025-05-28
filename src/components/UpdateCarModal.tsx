import React, { useState, useEffect } from 'react';
import { Car } from '@/types';

interface UpdateCarModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (updatedCar: Car) => void;
    car: Car | null;
}

const UpdateCarModal: React.FC<UpdateCarModalProps> = ({ isOpen, onClose, onUpdate, car }) => {
    const [formData, setFormData] = useState<Car>({
        id: 0,
        make: '',
        model: '',
        price: 0,
        electric: false,
        date: '',
        serviceRecords: []
    });

    useEffect(() => {
        if (car) {
            setFormData(car);
        }
    }, [car]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(formData);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                   type === 'number' ? Number(value) : value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-200/60 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">Update Car</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Make</label>
                        <input
                            type="text"
                            name="make"
                            value={formData.make}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Date</label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="dd/mm/yyyy"
                            pattern="\d{2}/\d{2}/\d{4}"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="electric"
                                checked={formData.electric}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Electric
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCarModal; 