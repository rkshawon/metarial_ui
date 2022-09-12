import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function MapProductAutoComplete() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Product"
            size="small"
            sx={{color:'gray'}}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
const products = [
    { title: "Product 1" },
    { title: "Product 2" },
    { title: "Product 3" },
    { title: "Product 4" },
    { title: "Product 5" },
    { title: "Product 6" },
    { title: "Product 7" },
    {
      title: "Product 8",
    },
    { title: "Product 9" },
    { title: "Product 10" },
  ];
