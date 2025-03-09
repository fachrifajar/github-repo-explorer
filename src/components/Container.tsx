import { Paper, Box, CssBaseline } from "@mui/material";
import { ThemeProviderWithMode } from "../hooks/ThemeContext";
import { Appbar } from "./Appbar";
export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProviderWithMode>
      <CssBaseline />
      <Appbar />

      <Box px={2}>
        <Paper
          component="main"
          elevation={1}
          sx={{
            flexGrow: 1,
            p: 4,
            minHeight: "90vh",
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: "10px",
            mb: 1,
          }}
        >
          {children}
        </Paper>
      </Box>
    </ThemeProviderWithMode>
  );
};
