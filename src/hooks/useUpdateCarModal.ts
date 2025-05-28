import { useState, useCallback } from "react";
import type { RowDoubleClickedEvent } from "ag-grid-community";
import { Car } from "@/types";

export const useUpdateCarModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCarForUpdate, setSelectedCarForUpdate] = useState<Car | null>(null);

    const onRowDoubleClicked = useCallback((event: RowDoubleClickedEvent, gridRef: React.RefObject<any>) => {
        if (event.node.group) {
            return;
        }
        
        if (gridRef.current?.api) {
            gridRef.current.api.stopEditing();
        }
        
        const clickedRowData = event.data;
        setSelectedCarForUpdate(clickedRowData);
        setIsModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setIsModalOpen(false);
        setSelectedCarForUpdate(null);
    }, []);

    return {
        isModalOpen,
        selectedCarForUpdate,
        onRowDoubleClicked,
        handleModalClose
    };
}; 