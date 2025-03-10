import {
  Button as ButtonMui,
  Tooltip,
  CircularProgress,
  Box,
  useMediaQuery,
} from "@mui/material";

interface ButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained";
  margin?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: object;
  tooltipText?: string;
  fullWidth?: boolean;
}

export const Button = ({
  label,
  variant = "contained",
  onClick,
  disabled,
  loading = false,
  sx,
  tooltipText = "This action is disabled",
  fullWidth,
}: ButtonProps) => {
  const isXs = useMediaQuery("(max-width: 600px)");
  return (
    <Tooltip
      title={disabled ? tooltipText : ""}
      arrow
      disableHoverListener={!disabled}
      placement="top"
    >
      <span>
        <ButtonMui
          variant={variant}
          onClick={onClick}
          disabled={loading ? true : disabled}
          fullWidth={fullWidth || isXs ? true : false}
          sx={{
            textTransform: "none",
            color: ["outlined", "text"]?.includes(variant)
              ? "primary.main"
              : "custom.light",
            fontSize: { md: "16px", sm: "16px", xs: "14px" },
            fontWeight: 600,
            minHeight: "30px",
            ...sx,
          }}
        >
          {loading ? (
            <Box
              sx={{ minHeight: "30px", display: "flex", alignItems: "center" }}
            >
              <CircularProgress size={18} color="inherit" />{" "}
            </Box>
          ) : (
            label
          )}
        </ButtonMui>
      </span>
    </Tooltip>
  );
};
