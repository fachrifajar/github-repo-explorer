import { TextField, useMediaQuery } from "@mui/material";

interface InputFieldProps<T> {
  label?: string;
  fullWidth?: boolean;
  slotProps?: object;
  value?: T;
  loading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputField = <T,>({
  label,
  fullWidth = true,
  slotProps,
  loading,
  value,
  onChange,
  onKeyDown,
}: InputFieldProps<T>) => {
  const isXs = useMediaQuery("(max-width: 600px)");
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      size={isXs ? "small" : "medium"}
      slotProps={slotProps}
      disabled={loading}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      sx={{
        "& label": {
          color: "text.secondary",
        },
        "& .MuiInputBase-input": {
          color: "text.primary",
        },
        "& label.Mui-focused": {
          color: "primary.main",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-disabled": {
            "& input": {
              bgcolor: "custom.cardDark",
              cursor: "not-allowed",
              WebkitTextFillColor: "#8E919B",
            },
            "&:hover fieldset": {
              borderColor: "secondary",
            },
            "&.Mui-focused fieldset": {
              borderColor: "secondary",
            },
          },
          "&:hover fieldset": {
            borderColor: "secondary",
          },
          "&.Mui-focused fieldset": {
            borderColor: "secondary",
          },
        },
      }}
    />
  );
};
