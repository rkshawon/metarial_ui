import { Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function ModifiedCheckbox({ label }) {
  return (
    <FormControlLabel
      label={
        <Typography
          sx={{ color: "#9D9D9D", fontSize: "12px", fontWeight: "400" }}
        >
          {label}
        </Typography>
      }
      control={
        <Checkbox
          sx={{
            transform: "scale(.8)",
            color: "#BFBFBF",
            "&.Mui-checked": {
              color: "#8D40FF",
            },
          }}
        />
      }
    />
  );
}
