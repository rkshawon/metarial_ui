import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React from "react";
import InputField from "../../../../../../Authentication/components/InputField";
import { customSvg } from "../../../../../../utils/customSvg";
import styles from "../../../../styles/customerStyles.module.css";

export default function CreateBundle() {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: "20px" }}
      >
        <FormControlLabel
          value="Buy X Get Y"
          control={<Radio />}
          label="Buy X Get Y"
        />
      </RadioGroup>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <div className={styles.paragraph_container}>
            <p className={styles.brand_para}>
              Create bundles to increase your average order value. If you have
              for example a 1+1 free action in your store, you can select that
              here. Title your bundle and first select a product at "when
              someone buys".
            </p>
            <p className={styles.brand_para}>
              After that you can select what your clients need to receive and
              adjust how many pieces. Also you could add more variants to the
              bundle. For example if someone orders a set, he will receive the
              product 1x in blue, 1x in black 1x in grey
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div style={{ padding: "0 20px 20px 0" }}>
            <InputField
              label="Bundle Title"
              placeholder="Enter bundle title"
              type="text"
              size="small"
              shrink={true}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <InputField
                  label="When Someone Buys"
                  placeholder="eg. Product 1- Blue"
                  type="text"
                  size="small"
                  shrink={true}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <InputField
                  label="They Will Recieve"
                  placeholder="eg. Product 1- Blue"
                  type="text"
                  size="small"
                  shrink={true}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth sx={{ marginTop: "10px" }}>
                  <InputLabel id="sort-by" sx={{ color: "gray" }}>
                    Sort By
                  </InputLabel>
                  <Select
                    labelId="sort-by"
                    id="demo-select-small"
                    sx={{
                      width: "100%",
                      color: "gray",
                      fontSize: "14px",
                      height: "45px",
                    }}
                    value={age}
                    label="Sort By"
                    onChange={handleChange}
                    // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                    IconComponent={customSvg}
                  >
                    <MenuItem value={0}>Select</MenuItem>
                    <MenuItem value={10}>Price High - Low</MenuItem>
                    <MenuItem value={20}>Price Low - High</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <div className={styles.button_group}>
              <div className={styles.button_flex}>
                <Button
                  variant="lightblue"
                  sx={{
                    width: "auto",
                    borderRadius: "5px",
                  }}
                >
                  Save Changes
                </Button>

                <Button
                  variant="purple_outlined"
                  startIcon={<Add />}
                  sx={{
                    margin: "-.5em 0",
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
