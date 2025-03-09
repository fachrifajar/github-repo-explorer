import { Button as ButtonMui, Tooltip, CircularProgress } from "@mui/material";

interface ButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained";
  margin?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: object;
  tooltipText?: string;
}

export const Button = ({
  label,
  variant = "contained",
  onClick,
  disabled,
  loading = false,
  sx,
  tooltipText = "This action is disabled",
}: ButtonProps) => {
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
          disabled={disabled}
          sx={{
            textTransform: "none",
            color: ["outlined", "text"]?.includes(variant)
              ? "primary.main"
              : "custom.light",
            fontSize: { md: "16px", sm: "16px", xs: "14px" },
            ...sx,
          }}
        >
          {loading ? <CircularProgress size={20} /> : label}
        </ButtonMui>
      </span>
    </Tooltip>
  );
};
