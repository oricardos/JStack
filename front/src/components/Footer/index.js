import React, { useContext } from "react";

import { Container } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
  const { handleToggleTheme, currentTheme } = useContext(ThemeContext);
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {currentTheme.backgroundColor === "#222" ? "🌞" : "🌙"}
      </button>
    </Container>
  );
}
