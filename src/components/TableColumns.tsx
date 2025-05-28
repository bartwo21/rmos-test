import type { CellClassParams, IDetailCellRendererParams, ValueFormatterParams } from "ag-grid-community";
import { useMemo } from "react";
import { Car, IServiceRecord } from "@/types";
import CompanyLogoRenderer from "./CompanyLogoRenderer";

export const useTableColumns = () => {
    const currencyFormatter = (params: ValueFormatterParams) => {
        return "£" + Math.floor(params.value).toLocaleString();
    };

    const colDefs = useMemo(() => [
        {
            headerName: "Car Details",
            children: [
                { field: "make" as const, cellRenderer: "agGroupCellRenderer", sortable: true, filter: true, rowGroup: true, hide: true, enableRowGroup: true },
                { field: "model" as const, sortable: true, filter: true, enableRowGroup: true},
                { field: "color", filter: true }
            ]},
            {
                headerName: "Logo",
                field: "make",
                cellRenderer: CompanyLogoRenderer,
                cellClass: "logoCell",
                minWidth: 100,
            },
        { 
            field: "price" as const, 
            sortable: true, 
            filter: "agNumberColumnFilter",
            cellRenderer: "agAnimateShowChangeCellRenderer",
            aggFunc: 'sum',
            enableValue: true,
            valueFormatter: currencyFormatter
        },
        {
            field: "date" as const,
            headerName: "Date",
            sortable: true,
            filter: "agDateColumnFilter",
            comparator: (valueA: string, valueB: string) => {
                const parseDate = (dateStr: string) => {
                    if (!dateStr) return new Date(0);
                    const parts = dateStr.split('/');
                    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
                };
                
                const dateA = parseDate(valueA);
                const dateB = parseDate(valueB);
                
                return dateA.getTime() - dateB.getTime();
            },
            filterParams: {
                comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
                    if (!cellValue) return 0;
                    
                    const dateParts = cellValue.split('/');
                    const year = Number(dateParts[2]);
                    const month = Number(dateParts[1]) - 1;
                    const day = Number(dateParts[0]);
                    const cellDate = new Date(year, month, day);
                    
                    if (cellDate < filterLocalDateAtMidnight) return -1;
                    else if (cellDate > filterLocalDateAtMidnight) return 1;
                    return 0;
                }
            }
        },
        { field: "electric" as const, sortable: true, filter: true }
    ], []);

    const detailCellRendererParams = useMemo(() => { 
        return {
            detailGridOptions: {
                columnDefs: [
                    { field: "serviceId", headerName: "Service ID" },
                    { field: "type", headerName: "Service Type" },
                    { field: "date", headerName: "Service Date" },
                    { field: "cost", headerName: "Cost", valueFormatter: "x.toLocaleString() + '$'" },
                    { field: "description", headerName: "Description", minWidth: 200 },
                    { field: "mechanic", headerName: "Mechanic", minWidth: 150 }
                ],
                defaultColDef: {
                    flex: 1,
                },
            },
            getDetailRowData: (params) => {
                params.successCallback(params.data.serviceRecords);
            }
        } as IDetailCellRendererParams<Car, IServiceRecord>;
    }, []);

    return {
        colDefs,
        detailCellRendererParams
    };
}; 