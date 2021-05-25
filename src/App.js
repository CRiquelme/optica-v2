import "./App.scss";
import {useState} from 'react'
import Form from "./components/Form/Form";
import { useBarcode } from 'react-barcodes';


function App() {
  const [state,setState]= useState(" ")
  const { inputRef } = useBarcode({
    value: state,
    options: {
      background: '#fff',
    }
  });
  return (
    <div className="">   
    <input type="text" onChange={(e)=>setState(e.target.value || " ")}/>        
      <svg ref={inputRef} />
    </div>
  );
}

export default App;
