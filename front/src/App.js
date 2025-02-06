import React, { useState, useMemo, useContext } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { TemaProvider, ThemeContext } from "./context/ThemeContext";

//TODO cria custom hooks para salvar o theme no localstorage

//TODO tentar fazer sem chatgpt

function App() {
  return (
    <TemaProvider>
      <ThemeConsumer />
    </TemaProvider>
  );
}

function ThemeConsumer() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
