import React, { useContext, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { TemaProvider, ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <TemaProvider>
      <ThemeConsumer />
    </TemaProvider>
  );
}

function ThemeConsumer() {
  const { currentTheme } = useContext(ThemeContext);

  const firstRender = useRef(true);

  //evitando primeiro render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }

    console.log("mudou");
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
