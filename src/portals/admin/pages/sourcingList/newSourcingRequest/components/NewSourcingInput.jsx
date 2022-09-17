import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import InputField from "../../../../../../Authentication/components/InputField";
import styles from "../../../../styles/adminStyles.module.css";
import uploadLogo from "../../../../assets/upload.png";
import { useState } from "react";

export default function NewSourcingInput() {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container spacing={6}>
      <Grid item sm={4}>
        <div>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#212B36" }}
          >
            Upload Image
          </Typography>
          <div
            className={styles.imagePreviewBox}
            style={{ height: "204px", flexDirection: "column" }}
          >
            <img src={uploadLogo} alt="" />
            <div>
              <h6
                componenet="label"
                style={{
                  fontSize: "12px",
                  color: "#919EAB",
                  fontWeight: "400",
                }}
              >
                Upload
              </h6>
              <input hidden accept="image/*" multiple type="file" />
            </div>
          </div>
        </div>
        <div style={{ margin: "3em 0" }}>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#212B36" }}
          >
            Select your Selling Bundles
          </Typography>
          <Select
            labelId="demo-select-small"
            placeholder="choose your answer"
            id="demo-select-small"
            sx={{
              margin: "10px 0",
              width: "100%",
              height: "46px",
            }}
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>choose your answer</MenuItem>
            <MenuItem value={20}>choose your answer</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>

        <div>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#212B36" }}
          >
            Adding Real Pictures
          </Typography>
          <div className={styles.imagePreviewBox} style={{ height: "45px" }}>
            <img src={uploadLogo} alt="" />
            <div>
              <h6
                componenet="label"
                style={{
                  fontSize: "12px",
                  color: "#919EAB",
                  fontWeight: "400",
                  marginLeft: "10px",
                }}
              >
                Upload
              </h6>
              <input hidden accept="image/*" multiple type="file" />
            </div>
          </div>
          <Typography
            sx={{
              fontSize: "7px",
              fontWeight: "300",
              color: "#9D9D9D",
              marginBottom: "5em",
            }}
          >
            This may delays your sourcing process
          </Typography>
        </div>
      </Grid>
      <Grid item sm={7}>
        <div style={{ margin: "20px 0" }}>
          <InputLabel
            sx={{ color: "#212B36", fontSize: "12px", fontWeight: "400" }}
          >
            Fill in the Product Name
          </InputLabel>
          <InputField placeholder="type the product name" />
        </div>
        <div style={{ margin: "20px 0" }}>
          <InputLabel
            sx={{ color: "#212B36", fontSize: "12px", fontWeight: "400" }}
          >
            Fill in the Product Link
          </InputLabel>
          <InputField placeholder="type or past the product link" />
        </div>

        <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
          Enter the shipping country here
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          sx={{
            margin: "10px 0",
            width: "100%",
            height: "46px",
          }}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div style={{ margin: "20px 0" }}>
          <InputLabel
            sx={{ color: "#212B36", fontSize: "12px", fontWeight: "400" }}
          >
            Additional Notes
          </InputLabel>
          <InputField placeholder="type your texts" size="46" />
        </div>

        <Button
          variant="contained"
          sx={{
            marginTop: "2em",
            width: "100%",
            height: "38",
            fontWeight: "700",
            fontSize: "16px",
            backgroundColor: "#1890FF",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
          }}
        >
          Submit Request
        </Button>
      </Grid>
    </Grid>
  );
}
