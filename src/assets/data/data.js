export let formAddProduct = {
  input: [
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "",
      className: "bg-blue-100",
      label: "Producto",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Marca",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Categoría",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Proveedores",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Factura",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Precio Unitario",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Precio de venta",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Stock crítico",
    },
    {
      onChange: (e) => console.log("jaja"),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Stock Inicial",
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

    container:{
    sectionInputs: "grid grid-cols-2 gap-4 mx-2",
    sectionButtons: "flex justify-center items-center",}
  },
};
