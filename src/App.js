//import { useEffect, useState } from "react";
//import { DataGrid } from "@material-ui/data-grid";
//import axios from "axios";
import AddProduct from "./components/AddProduct/AddProduct";


// const rows = [
//   { id: 1, col0: "Hello", col2: "World" },
//   { id: 2, col1: "XGrid", col2: "is Awesome" },
//   { id: 3, col1: "Material-UI", col2: "is Amazing" },
//   { id: 4, col1: "Hello", col2: "World" },
//   { id: 5, col1: "XGrid", col2: "is Awesome" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 7, col1: "Hello", col2: "World" },
//   { id: 8, col1: "XGrid", col2: "is Awesome" },
//   { id: 9, col1: "Material-UI", col2: "is Amazing" },
//   { id: 10, col1: "Hello", col2: "World" },
//   { id: 15, col1: "XGrid", col2: "is Awesome" },
//   { id: 13, col1: "Material-UI", col2: "is Amazing" },
// ];

// const columns = [
//   { field: "id", headerName: "Id", width: 150 },
//   { field: "nombre_tienda", headerName: "Nombre tienda", width: 200 },
//   { field: "created_at", headerName: "created", width: 200 },
//   { field: "updated_at", headerName: "updated", width: 200 },
// ];

export default function App() {


  return (
    // <div style={{ height: 300, width: "100%" }}>
    //   <DataGrid rows={data} columns={columns} checkboxSelection  editRowsModel={true}
    //     onEditCellChange={true}	/>
    // </div>
  <AddProduct />
  );
}
