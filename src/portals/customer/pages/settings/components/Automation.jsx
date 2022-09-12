import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
} from "@mui/material";
import React from "react";
import InputField from "../../../../../Authentication/components/InputField";
import styles from "../../../styles/customerStyles.module.css";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch";

export default function Automation() {
  const [state, setState] = React.useState({
    one: false,
    two: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [personName, setPersonName] = React.useState([]);

  const handleChanged = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <h6 className={styles.payment_title}>Automation</h6>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <div style={{ marginRight: "10px" }}>
                    <ModifiedSwitch />
                  </div>
                }
                label="  Automatically fulfill orders (if balance allows)"
              />
              <FormControlLabel
                control={
                  <div style={{ marginRight: "10px" }}>
                    <ModifiedSwitch />
                  </div>
                }
                label="Automatically request prices"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <h6 className={styles.payment_title}>Add Employee Account</h6>
          <InputField
            label="Employee Name"
            placeholder="Enter Employee Name"
            type="text"
            shrink={true}
            size="small"
          />
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Roles</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              //   multiple
              sx={{
                margin: "10px 0",
                width: "100%",
                height: "38px",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              value={personName}
              onChange={handleChanged}
              input={<OutlinedInput label="Roles" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <InputField
            label="Name"
            placeholder="Enter your name"
            type="text"
            shrink={true}
            size="small"
          />
          <Button
            variant="lightblue"
            className="w-full"
            sx={{ borderRadius: "5px" }}
          >
            Send invitation
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
