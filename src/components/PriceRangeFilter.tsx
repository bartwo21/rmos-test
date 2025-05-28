"use client";

import { PRICE_RANGES_OPTIONS } from "@/constants";
import { PriceRange } from "@/types";
import React, { useState } from "react";



const PRICE_RANGES: PriceRange[] = PRICE_RANGES_OPTIONS;

interface PriceRangeFilterProps {
    onFilterChange: (min: number, max: number) => void;
}

function PriceRangeFilter({ onFilterChange }: PriceRangeFilterProps) {
    const [selectedRange, setSelectedRange] = useState<PriceRange>(PRICE_RANGES[0]);

    const handleRangeChange = (range: PriceRange) => {
        setSelectedRange(range);
        onFilterChange(range.min, range.max);
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
            </label>
            <select
                value={selectedRange.label}
                onChange={(e) => {
                    const range = PRICE_RANGES.find(r => r.label === e.target.value) || PRICE_RANGES[0];
                    handleRangeChange(range);
                }}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            >
                {PRICE_RANGES.map((range) => (
                    <option key={range.label} value={range.label}>
                        {range.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PriceRangeFilter; 