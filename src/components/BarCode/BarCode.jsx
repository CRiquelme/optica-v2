import "./barcode.scss";
import React from 'react'
import { useBarcode } from "react-barcodes";

const BarCode = ({ barcode, className })=> {
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
