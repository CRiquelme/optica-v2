import React from "react";
import Datatable from "react-data-table-component";

const DataTable = ({ columns, data, title, headerHeight, className }) => {
  const paginateOption = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "todos",
  };

  return (
    <div className={className}>
      <DataTable
        fixedHeader
        columns={columns}
        data={data}
        title={title}
        fixedHeaderScrollHeight={headerHeight}
        paginationComponentOptions={paginateOption}
      />
    </div>
  );
};

export default DataTable;
