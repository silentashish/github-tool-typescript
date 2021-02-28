import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridDisplay = (props: any) => {
  const { columnHeaders, rowData, LinkComponent } = props;
  return (
    <div
      id="myGrid"
      style={{
        height: "80%",
        width: "90vw",
        color: "white",
      }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        columnDefs={columnHeaders}
        rowData={rowData}
        pagination={true}
        paginationAutoPageSize={true}
        frameworkComponents={{
          LinkComponent,
        }}
      />
    </div>
  );
};

export default GridDisplay;
