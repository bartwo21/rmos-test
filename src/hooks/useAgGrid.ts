import { useState, useRef, useCallback, useMemo } from "react";
import type { RowSelectionOptions, StatusPanelDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CARS } from "../constants";
import { Car } from "@/types";

export const useAgGrid = () => {
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState(CARS);
    const [hasSelectedRows, setHasSelectedRows] = useState(false);
    const [groupSelectionMode, setGroupSelectionMode] = useState<"self" | "descendants">("self");

    const getGroupSelectsValue = useCallback(() => {
        return groupSelectionMode;
    }, [groupSelectionMode]);

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
        onCarUpdate
    };
}; 