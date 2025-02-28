import React, { useContext } from "react";

import { Container } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";

export default class Footer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {/* render props */}
        {(contextData) => (
          <Container>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <button type="button" onClick={contextData.handleToggleTheme}>
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

// export default function Footer() {
//   const { handleToggleTheme, currentTheme } = useContext(ThemeContext);
//   return (
//     <Container>
//       <span>JStack's Blog. Todos os direitos reservados.</span>
//       <button type="button" onClick={handleToggleTheme}>
//         {currentTheme.backgroundColor === "#222" ? "🌞" : "🌙"}
//       </button>
//     </Container>
//   );
// }
