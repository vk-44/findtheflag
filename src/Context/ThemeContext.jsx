import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const themeList = ["default", "slate", "stone"];
  const [theme, setTheme] = useState(themeList[0]);

  const handleTheme = () => {
    const currentIndex = themeList.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeList.length;
    setTheme(themeList[nextIndex]);
  };

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ThemeContext is used outside ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
