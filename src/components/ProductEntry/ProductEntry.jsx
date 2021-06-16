import React, { useState } from "react";
import Selects from "../Select/Selects";
import Input from "../Input/Input";

const ProductEntry = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
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
        content={["","PUQ", "Tienda 2", "Tienda 3"]}
        label="Tienda"
        className="mb-8"
      />
        <Selects
        onChange={(event) => handleChange(event)}
        id="hi"
        content={["","Manzana", "Banana"]}
        label="Producto"
        className="mb-8 "
      />
     
    </div>
  );
};

export default ProductEntry;
