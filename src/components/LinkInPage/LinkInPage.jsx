import React from "react";

//Styles
import "./linkinpage.scss";

//component
const LinkInPage = ({links , li, className}) => {
  const link = links.map((link) => {
    if (li) {
      return <li>
        <a href={link.href} className={className}>
          {link.text}
        </a>
      </li>
    } else {
      return <a href={link.href} className={className}>
        {link.text}
      </a>
    }
  });

  return <>{link}</>;
};

export default LinkInPage;
