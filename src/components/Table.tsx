"use client";

import React from "react";
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from "ag-grid-enterprise";
import 'ag-grid-enterprise';
import { AgGridReact } from "ag-grid-react";
import PriceRangeFilter from "./PriceRangeFilter";
import UpdateCarModal from "./UpdateCarModal";
import { 
    PAGINATION_ENABLED, 
    PAGINATION_PAGE_SIZE, 
    PAGINATION_PAGE_SIZE_SELECTOR, 
    DEFAULT_COL_DEF 
} from "../constants";
import { themeBalham } from 'ag-grid-community';
import CustomToolPanel from "./CustomToolPanel";
import { useAgGrid } from "../hooks/useAgGrid";
import { useUpdateCarModal } from "../hooks/useUpdateCarModal";
import { useTableColumns } from "./TableColumns";

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_AG_GRID_LICENSE_KEY || "");

function Table() {
    const pagination = PAGINATION_ENABLED;
    const paginationPageSize = PAGINATION_PAGE_SIZE;
    const paginationPageSizeSelector = PAGINATION_PAGE_SIZE_SELECTOR;
    
    const {
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
    } = useAgGrid();

    const {
        isModalOpen,
        selectedCarForUpdate,
        onRowDoubleClicked,
        handleModalClose
    } = useUpdateCarModal();

    const { colDefs, detailCellRendererParams } = useTableColumns();

    const handleRowDoubleClick = (event: any) => {
        onRowDoubleClicked(event, gridRef);
    };

    return (
        <div className="p-6 mx-auto w-full mx-10">
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Car List</h2>
                <div className="flex flex-row items-center gap-4 mb-4">
                    <PriceRangeFilter onFilterChange={handlePriceFilter} />
                    
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Group Selection Mode
                        </label>
                        <select
                            value={groupSelectionMode}
                            onChange={(e) => onSelectionModeChange(e.target.value as "self" | "descendants")}
                            className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="self">Self</option>
                            <option value="descendants">Descendants</option>
                        </select>
                    </div>
                    
                    <div className="ml-auto mt-2">
                        <button onClick={onReverse} className="cursor-pointer h-10 bg-sky-500 text-white px-4 py-1 rounded-md mr-2">Reverse</button>
                        <button onClick={onRemove} className={`cursor-pointer h-10 bg-sky-500 text-white px-4 py-1 rounded-md mr-2 ${!hasSelectedRows ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!hasSelectedRows}>Remove Selected</button>
                    </div>
                </div>
                <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
                    <AgGridReact
                        ref={gridRef}
                        theme={themeBalham}
                        rowData={rowData}
                        columnDefs={colDefs}
                        defaultColDef={DEFAULT_COL_DEF}
                        pagination={pagination}
                        paginationPageSize={paginationPageSize}
                        paginationPageSizeSelector={paginationPageSizeSelector}
                        rowSelection={rowSelection}
                        onSelectionChanged={onSelectionChanged}
                        onRowDoubleClicked={handleRowDoubleClick}
                        animateRows={true}
                        getRowId={(params) => params.data.id}
                        singleClickEdit={true}
                        groupDisplayType="singleColumn"
                        groupDefaultExpanded={1}
                        rowGroupPanelShow={"always"}
                        masterDetail={true}
                        detailCellRendererParams={detailCellRendererParams}
                        statusBar={statusBar}
                        sideBar={
                            {
                                toolPanels: [
                                    {
                                        id: "addCar",
                                        labelDefault: "Add Car",
                                        labelKey: "addCar",
                                        iconKey: "filter",
                                        toolPanel: CustomToolPanel,
                                        toolPanelParams: {
                                          onAddCar: handleAddCar
                                        },
                                      },
                                    {
                                      id: "columns",
                                      labelDefault: "Columns",
                                      labelKey: "columns",
                                      iconKey: "columns",
                                      toolPanel: "agColumnsToolPanel",
                                    },
                                    {
                                      id: "filters",
                                      labelDefault: "Filters",
                                      labelKey: "filters",
                                      iconKey: "filter",
                                      toolPanel: "agFiltersToolPanel",
                                    },
                                  ],
                                defaultToolPanel: undefined,
                            }
                        }
                        autoGroupColumnDef={{
                            headerName: "Car Brand",
                            field: "make",
                            cellRenderer: "agGroupCellRenderer",
                            cellRendererParams: {
                                suppressCount: false,
                                checkbox: true
                            }
                        }}
                    />
                </div>
            </div>

            <UpdateCarModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onUpdate={onCarUpdate}
                car={selectedCarForUpdate}
            />
        </div>
    )
}

export default Table;

