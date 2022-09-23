import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function MapProductAutoComplete({ getValue }) {
  return (
    <Stack sx={{ width: "100%" }}>
      <Autocomplete
        onChange={(event, value) => getValue(value)}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Product"
            size="small"
            sx={{ color: "gray" }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
const products = [
  { title: "Foundations Matte Flip Flop 1" },
  { title: "Foundations Matte Flip Flop 2" },
  { title: "Foundations Matte Flip Flop 3" },
  { title: "Foundations Matte Flip Flop 4" },
  { title: "Foundations Matte Flip Flop 5" },
  { title: "Foundations Matte Flip Flop 6" },
  { title: "Foundations Matte Flip Flop 7" },
  {
    title: "Foundations Matte Flip Flop 8",
  },
  { title: "Foundations Matte Flip Flop 9" },
  { title: "Foundations Matte Flip Flop 10" },
];
