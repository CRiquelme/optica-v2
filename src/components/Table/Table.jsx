import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data, title, headerHeight, className }) => {
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
        pagination
        fixedHeaderScrollHeight={headerHeight}
        paginationComponentOptions={paginateOption}
      />
    </div>
  );
};

export default Table;
