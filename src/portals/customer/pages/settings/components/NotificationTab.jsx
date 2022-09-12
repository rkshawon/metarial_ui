import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch";

export default function NotificationTab() {
  const [state, setState] = React.useState({
    one: false,
    two: true,
    three: false,
    four: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            onChange={handleChange}
            control={
              <div style={{ marginRight: "10px" }}>
                <ModifiedSwitch />
              </div>
            }
            label=" Notify me when a housenumber is missing"
          />
          <FormControlLabel
            onChange={handleChange}
            control={
              <div style={{ marginRight: "10px" }}>
                <ModifiedSwitch />
              </div>
            }
            label=" Notify me when my balance is low"
          />
          <FormControlLabel
            onChange={handleChange}
            control={
              <div style={{ marginRight: "10px" }}>
                <ModifiedSwitch />
              </div>
            }
            label=" Notify me for order-delaying events   "
          />
          <FormControlLabel
            onChange={handleChange}
            control={
              <div style={{ marginRight: "10px" }}>
                <ModifiedSwitch />
              </div>
            }
            label=" Notify me when a transaction successfully happened"
          />
        </FormGroup>
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="lightblue" sx={{ borderRadius: "5px", width: "auto" }}>
          Connect Store
        </Button>
      </div>
    </div>
  );
}
