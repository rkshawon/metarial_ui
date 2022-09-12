import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import InputField from "../../../../../Authentication/components/InputField";

export default function AddressInfo() {
  return (
    <div>
      <h6>
        Fill up the following information to complete the shipping process
      </h6>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
            Name
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter your name"
            type="text"
            size="small"
          />
        </Grid>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          Company Name
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter company name"
            type="text"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          Country
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            sx={{
              margin: "10px 0",
              width: "100%",
              height: "38px",
            }}
            // value={age}
            label="select your shipping country"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          City
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter city name"
            type="text"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
      <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          Address/ Street
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter street address"
            type="text"
            size="small"
          />
        </Grid>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          Postal Code
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter company name"
            type="text"
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
}
