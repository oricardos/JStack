import React from "react";
import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
      <hr />
    </header>
  );
}

//Tipagem
Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

// Default props
Header.defaultProps = {
    title: "Título padrão",
    children: "Conteúdo padrão",
}
