import React, { createContext, useState, useMemo } from "react";
import themes from "../styles/themes";

export const ThemeContext = createContext();

export function TemaProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  console.table(theme, handleToggleTheme, currentTheme);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
