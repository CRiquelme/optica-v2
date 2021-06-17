import React, { useState } from "react";
import Selects from "../Select/Selects";
import Input from "../Input/Input";
import Table from "../Table/Table";

const rows = [
  {
    id: 1,
    col1: "Hello",
    col2: "World",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 2,
    col1: "XGrid",
    col2: "is Awesome",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 3,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 4,
    col1: "Hello",
    col2: "World",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 5,
    col1: "XGrid",
    col2: "is Awesome",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 6,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 7,
    col1: "Hello",
    col2: "World",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 8,
    col1: "XGrid",
    col2: "is Awesome",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 9,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 10,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 11,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
  {
    id: 12,
    col1: "Material-UI",
    col2: "is Amazing",
    col11: "Material-UI",
    col12: "is Amazing",
  },
];

const columns = [
  { name: "Producto", selector: "id", sortable: true },
  { name: "Tienda", selector: "col1", sortable: true },
  { name: "Cantidad", selector: "col2", sortable: true },
  { name: "Factura", selector: "col11", sortable: true },
];

const ProductEntry = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex">
      <div className="flex flex-col max-w-xs">
        <h1 className="font-bold mb-3">Nuevo ingreso</h1>

        <Selects
          onChange={(event) => handleChange(event)}
          id="hi"
          content={["Manzana", "Banana"]}
          label="Productos"
          className="mb-8"
        />
        <Selects
          onChange={(event) => handleChange(event)}
          id="hi"
          content={["PUQ", "Tienda 2", "Tienda 3"]}
          label="Tiendas"
          className="mb-8"
        />
        <label>Cantidad de Productos</label>
        <Input
          onChange={(event) => handleChange(event)}
          type="input"
          value=""
          placeholder="Cantidad"
          name="cantidad-productos"
          className="mb-8"
        />
        <label>Factura</label>
        <Input
          onChange={(event) => handleChange(event)}
          type="input"
          value=""
          placeholder="Factura"
          name="cantidad-productos"
          className="mb-8"
        />

        <h2 className="font-bold mb-3">Filtros</h2>
        <Selects
          onChange={(event) => handleChange(event)}
          id="hi"
          content={["", "PUQ", "Tienda 2", "Tienda 3"]}
          label="Tienda"
          className="mb-8"
        />
        <Selects
          onChange={(event) => handleChange(event)}
          id="hi"
          content={["", "Manzana", "Banana"]}
          label="Producto"
          className="mb-8 "
        />
      </div>
      <div className="ml-20 ">
        <Table headerHeight="600px" columns={columns} data={rows} className="-mt-16" />
      </div>
    </div>
  );
};

export default ProductEntry;
