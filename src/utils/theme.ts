import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#17212f",
              paper: "#17212f",
            },
            text: {
              primary: "#ffffff",
              secondary: "#aaaaaa",
              light: "#1BA0E2",
            },
            custom: {
              contrastText: "#90caf9",
              lightenText: "#14b8a6",
              icon: "#e8e6e3",
              light: "#07111c",
              card: "#343a46",
              border: "#343a46",
            },
            primary: {
              main: "#90caf9",
            },
          }
        : {
            background: {
              default: "#E8F5FC",
              paper: "#fff",
            },
            text: {
              primary: "#000000",
              secondary: "#444444",
              light: "#90caf9",
            },
            custom: {
              contrastText: "#1BA0E2",
              lightenText: "#14b8a6",
              icon: "#5f6368",
              light: "#FFFFFF",
              card: "#fff",
              border: "#D1D5DB",
            },
            primary: {
              main: "#1BA0E2",
            },
          }),
    },
  });

export default theme;
