import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { customSvg } from "../../../../../../../utils/customSvg";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function ModifiedSelect() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        displayEmpty
        IconComponent={customSvg}
        sx={{ width: "220px" }}
        id="demo-select-small"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">Select</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
