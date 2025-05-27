"use client";

import React, { useMemo, useState } from "react";
import type { CellClassParams, ColDef, RowSelectionOptions } from "ag-grid-community";
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
import 'ag-grid-enterprise';
import { AgGridReact } from "ag-grid-react";
import CarForm from "./CarForm";
import PriceRangeFilter from "./PriceRangeFilter";
import { 
    CARS, 
    PAGINATION_ENABLED, 
    PAGINATION_PAGE_SIZE, 
    PAGINATION_PAGE_SIZE_SELECTOR, 
    MODEL_OPTIONS, 
    DEFAULT_COL_DEF 
} from "../constants";
import { Car } from "@/types";
import { ShowPriceButton } from "./TableButtons";
import { themeBalham } from 'ag-grid-community';


ModuleRegistry.registerModules([AllEnterpriseModule]);

LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_AG_GRID_LICENSE_KEY || "");


function Table() {
    const pagination = PAGINATION_ENABLED;
    const paginationPageSize = PAGINATION_PAGE_SIZE;
    const paginationPageSizeSelector = PAGINATION_PAGE_SIZE_SELECTOR;

    const [rowData, setRowData] = useState(CARS);
    const [filteredCarData, setFilteredCarData] = useState(CARS);
    const [colDefs, setColDefs] = useState([
        { field: "make" as const, sortable: true, filter: true },
        { field: "model" as const, sortable: true, filter: true, editable: true, cellEditor: "agSelectCellEditor", cellEditorParams: { values: MODEL_OPTIONS }, cellClassRules: {
            "bg-gray-200": (params: CellClassParams) => params.data.model === "Model Y"
        } },
        { 
            field: "price" as const, 
            sortable: true, 
            filter: "agNumberColumnFilter",
            filterParams: {
                filterOptions: ['inRange'],
                defaultOption: 'inRange'
            },
            cellRenderer: ShowPriceButton 
        },
        { field: "electric" as const, sortable: true, filter: true }
    ]);

    const handleAddCar = (car: Car) => {
        const newData = [...rowData, car];
        setRowData(newData);
        setFilteredCarData(newData);
    };

    const handlePriceFilter = (min: number, max: number) => {
        if (min === 0 && max === Infinity) {
            setFilteredCarData(rowData);
        } else {
            const filtered = rowData.filter(car => 
                car.price >= min && car.price <= max
            );
            setFilteredCarData(filtered);
        }
    };

    const rowSelection = useMemo<
    RowSelectionOptions | "single" | "multiple"
  >(() => {
    return { mode: "multiRow" };
  }, []);

    const defaultColDef: ColDef = DEFAULT_COL_DEF;

    return (
        <div className="p-6 mx-auto">
            <CarForm onAddCar={handleAddCar} />

            <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Car List</h2>
                <div className="mb-4">
                    <PriceRangeFilter onFilterChange={handlePriceFilter} />
                </div>
                <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
                    <AgGridReact
                        theme={themeBalham}
                        rowData={filteredCarData}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                        pagination={pagination}
                        paginationPageSize={paginationPageSize}
                        paginationPageSizeSelector={paginationPageSizeSelector}
                        cellSelection={true}
                        rowSelection={rowSelection}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table;

