import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === "light" ? "#000" : "#fff",
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
