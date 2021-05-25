import React from "react";

//styles
import "./linknewtab.scss";

const Link = ({ links }) => {
  links.map((link) => (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={link.className}
    >
      {link.text}
    </a>
  ));
  return <div></div>;
};

export default Link;
