import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function DatePicker({ title }) {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={title}
          // sx={{
          //   fontSize: "14px",
          //   "& .react-date-picker__wrapper": {
          //     padding: "0 10px",
          //     borderColor: "#ccc",
          //     borderRadius: "4px",
          //   },
          // }}
          inputFormat="MM/DD/YYYY"
          value={value}
          
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              // sx={{ height: "46px" }}
              size="small"
              // InputProps={{
              //   fontSize: "14px",
              // }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
