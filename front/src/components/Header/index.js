import React, { useContext } from "react";

import { Container } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { handleToggleTheme, currentTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={handleToggleTheme} type="button">
        {currentTheme.backgroundColor === "#222" ? "🌞" : "🌙"}
      </button>
    </Container>
  );
}
