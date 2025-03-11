import { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      contrastText: string;
      lightenText: string;
      icon: string;
      light: string;
      card: string;
      border: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      contrastText?: string;
      lightenText?: string;
      icon?: string;
      light?: string;
      card?: string;
      border?: string;
    };
  }

  interface TypeText {
    light: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}
