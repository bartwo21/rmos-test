import { useState, useRef, useCallback, useMemo } from "react";
import type { RowSelectionOptions, StatusPanelDef, RefreshCellsParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CARS } from "../constants";
import { Car } from "@/types";

export const useAgGrid = () => {
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState(CARS);
    const [hasSelectedRows, setHasSelectedRows] = useState(false);
    const [groupSelectionMode, setGroupSelectionMode] = useState<"self" | "descendants">("self");
    const [loading, setLoading] = useState(false);

    const getGroupSelectsValue = useCallback(() => {
        return groupSelectionMode;
    }, [groupSelectionMode]);

    const scrambleAndRefreshLeftToRight = useCallback(() => {
        const updatedData = rowData.map(item => {
            const newItem = { ...item };
            
            const makes = ["Tesla", "Ford", "Toyota", "BMW", "Mercedes", "Audi", "Honda", "Nissan"];
            const models = ["Model Y", "F-150", "Corolla", "X5", "C-Class", "A4", "Civic", "Leaf"];
            const colors = ["White", "Black", "Red", "Blue", "Gray", "Silver", "Green"];
            
            if (Math.random() > 0.7) {
                newItem.make = makes[Math.floor(Math.random() * makes.length)];
            }
            if (Math.random() > 0.7) {
                newItem.model = models[Math.floor(Math.random() * models.length)];
            }
            if (Math.random() > 0.6) {
                newItem.color = colors[Math.floor(Math.random() * colors.length)];
            }
            if (Math.random() > 0.5) {
                newItem.price = Math.floor(Math.random() * 100000) + 20000;
            }
            if (Math.random() > 0.8) {
                newItem.electric = Math.random() > 0.5;
            }
            return newItem;
        });
        
        setRowData(updatedData);
    }, [rowData]);

    const handleAddCar = (car: Car) => {
        const newData = [...rowData, car];
        setRowData(newData);
    };

    const handlePriceFilter = (min: number, max: number) => {
        if (!gridRef.current) return;
        
        const api = gridRef.current.api;
        
        if (min === 0 && max === Infinity) {
            api.setColumnFilterModel('price', null);
        } else {
            api.setColumnFilterModel('price', {
                filterType: 'number',
                type: 'inRange',
                filter: min,
                filterTo: max === Infinity ? null : max
            });
        }
        
        api.onFilterChanged();
    };

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current?.api.getSelectedRows();
        setHasSelectedRows(Boolean(selectedRows?.length && selectedRows.some(row => row !== undefined)));
    }, []);

    const onReverse = useCallback(() => {
        if (!gridRef.current) return;
    
        const api = gridRef.current.api;
        const reversedData = [...rowData].reverse();

        api.applyTransaction({
            remove: rowData,
            add: reversedData
        });

        setRowData(reversedData);
    }, [rowData]);

    const onRemove = useCallback(() => {
        try {
            const selectedRows = gridRef.current?.api.getSelectedRows();
            console.log(selectedRows)
            if (!selectedRows || selectedRows.length === 0) {
                return;
            }
            const selectedIds = selectedRows
                .map((row) => row?.id)
                .filter((id) => id !== undefined && id !== null);

            const newData = rowData.filter((car) => !selectedIds.includes(car.id));
            setRowData(newData);
            setHasSelectedRows(false);
            
        } catch (error) {
            console.error("err", error);
        }
    }, [rowData]);

    const onSelectionModeChange = useCallback((newMode: "self" | "descendants") => {
        setGroupSelectionMode(newMode);
        if (gridRef.current) {
            gridRef.current.api.setGridOption("rowSelection", {
                mode: "multiRow",
                groupSelects: newMode,
            });
        }
    }, []);

    const onCarUpdate = useCallback((updatedCar: Car) => {
        const updatedData = rowData.map(car => 
            car.id === updatedCar.id ? updatedCar : car
        );
        setRowData(updatedData);
    }, [rowData]);
    
    const mockLoading = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleExport = useCallback(() => {
        gridRef.current?.api.exportDataAsExcel();
    }, []);

    const statusBar = useMemo<{
        statusPanels: StatusPanelDef[];
    }>(() => {
        return {
            statusPanels: [
                { statusPanel: "agTotalRowCountComponent" },
            ],
        };
    }, []);

    const rowSelection = useMemo<
        RowSelectionOptions | "single" | "multiple"
    >(() => {
        return { 
            mode: "multiRow",
            groupSelects: getGroupSelectsValue()
        };
    }, [getGroupSelectsValue]);

    return {
        gridRef,
        rowData,
        hasSelectedRows,
        groupSelectionMode,
        statusBar,
        rowSelection,
        handleAddCar,
        handlePriceFilter,
        onSelectionChanged,
        onReverse,
        onRemove,
        onSelectionModeChange,
        onCarUpdate,
        loading,
        mockLoading,
        handleExport,
        scrambleAndRefreshLeftToRight
    };
}; 