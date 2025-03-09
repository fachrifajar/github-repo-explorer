import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme from "../utils/theme";

interface ThemeContextProps {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProviderWithMode: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Check localStorage for the saved mode, falling back to system preference
  const storedMode = localStorage.getItem("themeMode") as
    | "light"
    | "dark"
    | null;
  const initialMode = storedMode || (prefersDarkMode ? "dark" : "light");

  const [mode, setMode] = useState<"light" | "dark">(initialMode);

  // Save the mode in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within ThemeProviderWithMode"
    );
  }
  return context;
};
