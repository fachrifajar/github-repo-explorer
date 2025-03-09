import { TextField, useMediaQuery } from "@mui/material";

interface InputFieldProps {
  label?: string;
  fullWidth?: boolean;
  slotProps?: object;
}

export const InputField = ({
  label,
  fullWidth = true,
  slotProps,
}: InputFieldProps) => {
  const isXs = useMediaQuery("(max-width: 600px)");
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      size={isXs ? "small" : "medium"}
      slotProps={slotProps}
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
          //   "& fieldset": {
          //     borderColor: error && "error.main",
          //   },
          "&.Mui-disabled": {
            "& input": {
              bgcolor: "custom.cardDark",
              cursor: "not-allowed",
              WebkitTextFillColor: "#8E919B",
            },
            // "& fieldset": {
            //   borderColor: error && "error.main",
            // },
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
