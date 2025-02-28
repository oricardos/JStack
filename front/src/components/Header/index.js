import React from "react";

import { Container } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";

export default class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextData) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={contextData.handleToggleTheme} type="button">
              {contextData.currentTheme.backgroundColor === "#222"
                ? "🌞"
                : "🌙"}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
