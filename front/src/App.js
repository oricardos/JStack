import React, { useContext, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { TemaProvider, ThemeContext } from "./context/ThemeContext";

class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log("componentDidMount executed"); // equivalente à useEffect(() => {}, []) executa uma vez, quando o componente é montado
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevProps,
      prevState,
    });
  }

  componentDidCatch(error, info) {
    console.log({ error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log({
      currentState: this.state,
      nextProps,
      nextState,
    });

    return true;
  }

  componentWillUnmount() {}

  render() {
    console.log("rendered"); // equivalente à useEffect(() =>{}) executa sempre que o componente é renderizado
    return (
      <TemaProvider>
        <button onClick={() => this.setState({ changed: true })}>
          Change State
        </button>
        <ThemeContext.Consumer>
          {(contextData) => (
            <ThemeProvider theme={contextData.currentTheme}>
              <GlobalStyle />
              <Layout />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </TemaProvider>
    );
  }
}

export default App;
