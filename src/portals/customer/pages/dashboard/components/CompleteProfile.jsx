import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import InputField from "../../../../../Authentication/components/InputField";
import styles from "../../../styles/customerStyles.module.css";

export default function CompleteProfile() {
  return (
    <div>
      <h2 className={styles.welcome_popup}>Complete your profile</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginRight: 10 }}>Lets introduce yourself</h3>
      </div>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
            What is your full name?
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="type your full name"
            type="text"
            size="small"
          />
        </Grid>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
            What did you come across to U - SEND?
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="type your answer"
            type="text"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
            What language do you speak?
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
            label="Age"
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
            How are you selling?
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
            label="Age"
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
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
            What is your average daily order volume?
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
            label="Age"
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
            What are you planning to use U - SEND for?
          </InputLabel>
          <InputField
            //   label="Login E-mail or Phone"
            placeholder="enter your answer"
            type="text"
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
}
