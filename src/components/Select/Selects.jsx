import React from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./selects.scss";

/**
 * 
 * @param onChange 
 * This function is executed when the user changes the selected option.
 * @param id Id for select component
   @param content Array with text strings for the content of the MenuItem component. (options)
 * @returns 
 */
const Selects = ({ onChange, id, content }) => { 
  return (
    <FormControl>
  
      <Select id={id} onChange={onChange} >    
        {content?.map((item)=><MenuItem key={item} value={item || ""}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default Selects;
