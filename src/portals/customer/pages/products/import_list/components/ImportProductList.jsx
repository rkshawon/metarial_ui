import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { importDataRows } from "../importDataRows";

export default function ImportProductList() {
  const [value, setValue] = useState("Foundation Matte Flip Flop");
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };
  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      {importDataRows.map((data) => (
        <div
          style={{
            marginBottom: "20px",
            padding: "30px",
            borderRadius: "8px",
            boxShadow:
              "0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item sm={3}>
              <img
                src={data.product.img}
                alt="import product"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item sm={9}>
              <div className="flexbox">
                <div>
                  <h4 style={{ fontSize: "18px" }}>{data.product.title}</h4>
                  <h6 style={{ marginTop: "10px" }}>
                    by:{" "}
                    <b style={{ color: "#3366FF" }}>
                      Bashundara Official Store
                    </b>
                  </h6>
                </div>
                <div className="flexbox">
                  <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <Select
                      defaultValue={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      renderValue={
                        age !== ""
                          ? undefined
                          : () => <Placeholder>Actions</Placeholder>
                      }
                    >
                      <MenuItem value="">
                        <span style={{ fontSize: "12px" }}>Mapping</span>
                      </MenuItem>
                      <MenuItem value={10}>
                        <span style={{ fontSize: "12px" }}>Delivered</span>
                      </MenuItem>
                      <MenuItem value={20}>
                        <span style={{ fontSize: "12px" }}>Unshipped</span>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="deepblue"
                    sx={{ fontSize: "12px" }}
                    startIcon={<Add sx={{ color: "#fff" }} />}
                  >
                    Import to store
                  </Button>
                </div>
              </div>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <div>
                    <h5>Title</h5>
                    <TextField
                      sx={{
                        margin: 0,
                        width: "100%",
                        "& .MuiInputBase-root": {
                          color: "gray",
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      variant="outlined"
                      defaultValue={value}
                    />
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div>
                    <h5>Price</h5>
                    <TextField
                      sx={{
                        margin: 0,
                        width: "100%",
                        "& .MuiInputBase-root": {
                          color: "gray",
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      variant="outlined"
                      defaultValue={data.price}
                    />
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div>
                    <h5>Type</h5>
                    <TextField
                      sx={{
                        margin: 0,
                        width: "100%",
                        "& .MuiInputBase-root": {
                          color: "gray",
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      variant="outlined"
                      defaultValue="Shoe"
                    />
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div>
                    <h5>Variants</h5>
                    <TextField
                      sx={{
                        margin: 0,
                        width: "100%",
                        "& .MuiInputBase-root": {
                          color: "gray",
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      variant="outlined"
                      defaultValue="Red"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}
