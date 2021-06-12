import React from "react";

const Label = ({ forContent, content, className }) => {
  return (
    <>
      <label htmlFor={forContent} className={className}>
        {content}
      </label>
    </>
  );
};

export default Label;
