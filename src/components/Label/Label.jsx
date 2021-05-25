import React from "react";

const Label = ({ forContent, content, className }) => {
  return (
    <>
      <label for={forContent} className={className}>
        {content}
      </label>
    </>
  );
};

export default Label;
