import { useState } from "react";
import Form from "../Form/Form";

function FormCategory() {
  const [product, setProduct] = useState("");
  const [provider, setProvider] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [bill, setBill] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [criticalStock, setCriticalStock] = useState("");
  const [initialStock, setInitialStock] = useState("");

  // console.log(
  //   product,
  //   provider,
  //   category,
  //   brand,
  //   bill,
  //   unitPrice,
  //   buyPrice,
  //   criticalStock,
  //   initialStock
  // );

  let formAddProduct = {
    input: [
      {
        onChange: setProduct,
        type: "text",
        value: product,
        className: "bg-blue-100",
        label: "Producto",
        name: "producto",
      },
      {
        onChange: setProvider,
        type: "text",
        value: provider,
        className: "bg-blue-100",
        label: "proveedor",
        name: "provider",
      },
      {
        onChange: setCategory,
        type: "text",
        value: category,
        className: "bg-blue-100",
        label: "Categoría",
        name: "category",
      },
      {
        onChange: setBrand,
        type: "text",
        value: brand,
        className: "bg-blue-100",
        label: "Marca",
        name: "brand",
      },
      {
        onChange: setBill,
        type: "text",
        value: bill,
        className: "bg-blue-100",
        label: "Factura",
        name: "bill",
      },
      {
        onChange: setUnitPrice,
        type: "text",
        value: unitPrice,
        className: "bg-blue-100",
        label: "Precio Unitario",
        name: "unitPrice",
      },
      {
        onChange: setBuyPrice,
        type: "text",
        value: buyPrice,
        className: "bg-blue-100",
        label: "Precio de compra",
        name: "buyPrice",
      },
      {
        onChange: setCriticalStock,
        type: "text",
        value: criticalStock,
        className: "bg-blue-100",
        label: "Stock crítico",
        name: "criticalStock",
      },
      {
        onChange: setInitialStock,
        type: "text",
        value: initialStock,
        className: "bg-blue-100",
        label: "Stock Inicial",
        name: "initialStock",
      },
    ],
    Button: [
      {
        value: "cancelar",
        className: "rounded bg-gray-200 p-2 m-2",
        onClick: () => alert("soy button"),
      },
      {
        value: "Guardar",
        className: "rounded bg-gray-200 p-2 m-2",
        onClick: () => alert("soy button"),
      },
    ],
    styles: {
      sectionInputs: "grid grid-cols-2 gap-4 mx-2",
      sectionButtons: "flex justify-center items-center",
    },
  };

  return (
    <div className="">
      <h1>Agregar Producto</h1>
      <Form data={formAddProduct} />
    </div>
  );
}

export default FormCategory;
