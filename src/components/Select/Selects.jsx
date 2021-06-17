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
const Selects = ({ onChange, id, content,label, className }) => {
  return (
    <>
      <label>{label}</label>
      <select className={className} id={id} onChange={onChange}>
        {content?.map((item) => (
          <option key={item} value={item || ""}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selects;
