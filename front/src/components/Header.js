import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "../context/ThemeContext";
import Title from './Title';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {children}
      <hr />
    </header>
  );
}

//Tipagem
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Default props
Header.defaultProps = {
  title: "Título padrão",
  children: "Conteúdo padrão",
};
