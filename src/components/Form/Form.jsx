import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Label from "../Label/Label";

let data = {
  input: [
    {
      onChange: (e) => console.log(e.target.value),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Nombre",
    },
    {
      onChange: (e) => console.log(e.target.value),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Nombre",
    },
    {
      onChange: (e) => console.log(e.target.value),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Nombre",
    },
    {
      onChange: (e) => console.log(e.target.value),
      type: "text",
      value: "hi",
      className: "bg-blue-100",
      label: "Nombre",
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
    {
      value: "Otro Boton",
      className: "rounded bg-gray-200 p-2 m-2",
      onClick: () => alert("soy button"),
    },
    {
      value: "Uno más",
      className: "rounded bg-gray-200 p-2 m-2",
      onClick: () => alert("soy button"),
    },
  ],
  styles: {
    sectionInputs: "grid grid-cols-2 gap-4 mx-2",
    sectionButtons: "flex justify-center items-center",
  },
};

const Form = () => {
  return (
    <form className="">
      <section className={data.styles.sectionInputs}>
        {data.input.map((input) => (
          <>
            <Label forContent={input.forContent} content={input.label} />
            <Input
              onChange={input.onChange}
              type={input.type}
              value={input.value}
              name={input.name}
              placeholder={input.placeholder}
              className={input.className || ""}
            />
          </>
        ))}
      </section>
      <section>
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
