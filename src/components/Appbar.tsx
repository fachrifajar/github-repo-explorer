import React from "react";
// mui components
import { Box, Typography, IconButton } from "@mui/material";
// icons
import { MoonIcon, SunIcon, GitHubIcon } from "../utils/icons";
// custom hooks
import { useThemeContext } from "../hooks/ThemeContext";

export const Appbar: React.FC = () => {
  const { mode, toggleMode } = useThemeContext();

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "background.default",
        py: 1.5,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 99999,
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h6"
        fontWeight={800}
        sx={{
          backgroundClip: "text",
          lineHeight: 1.2,
        }}
      >
        Github Repo Explorer
      </Typography>

      {/* Action Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Theme Toggle */}
        <IconButton onClick={toggleMode}>
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {/* GitHub Link */}
        <IconButton
          component="a"
          href="https://github.com/fachrifajar/github-repo-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
