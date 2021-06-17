//import { useEffect, useState } from "react";
//import { DataGrid } from "@material-ui/data-grid";
//import axios from "axios";
import { useState } from "react";
import ProductEntry from "./components/ProductEntry/ProductEntry";

export default function App() {
  return (
    // <div style={{ height: 300, width: "100%" }}>
    //   <DataGrid rows={data} columns={columns} checkboxSelection  editRowsModel={true}
    //     onEditCellChange={true}	/>
    // </div>
    <div className="flex ">
      <div className="ml-16 mt-20">
        <ProductEntry />
      </div>
     
    </div>
  );
}
