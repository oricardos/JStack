import React, { createContext, useState, useMemo, useEffect } from "react";
import themes from "../styles/themes";

export const ThemeContext = createContext();

export function TemaProvider({ children }) {
  const themeByLocalStorage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeByLocalStorage);

  const currentTheme = useMemo(() => {
    localStorage.setItem("theme", theme);
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
