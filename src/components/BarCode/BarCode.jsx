import "./barcode.scss";
import { useState } from "react";
import Form from "./components/Form/Form";
import { useBarcode } from "react-barcodes";

function BarCode({ barcode, className }) {
  const { inputRef } = useBarcode({
    value: barcode,
    options: {
      background: "#fff",
    },
  });
  return (
    <div className={className}>
      <svg ref={inputRef} />
    </div>
  );
}

export default BarCode;
