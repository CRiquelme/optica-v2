import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Label from "../Label/Label";

const Form = ({ data }) => {
  return (
    <form className={data.styles.form}>
      <section className={data.styles.containerInputs}>
        {data.input.map((input) => (
          <div
            key={input.forContent}
            className={data.styles?.containerLabelInput || ""}
          >
            <Label forContent={input.forContent} content={input.label} />
            <Input
              onChange={(e) => input.onChange(e.target.value)}
              type={input.type}
              value={input.value}
              name={input.name}
              placeholder={input.placeholder}
              className={data.styles?.input || ""}
            />
          </div>
        ))}
      </section>
      <section styles={data.styles.containerButton}>
        {data.Button.map((button) => (
          <Button
            value={button.value}
            onClick={button.onClick}
            className={button.className}
          />
        ))}
      </section>
    </form>
  );
};

export default Form;
