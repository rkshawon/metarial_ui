import { Close } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import InputField from "../../../../../Authentication/components/InputField";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch";
import { paymentMethods } from "../../../../../dummyData";
import styles from "../../../styles/customerStyles.module.css";
import InvoiceHistory from "./InvoiceHistory";

export default function Billing() {
  const [state, setState] = React.useState({
    method1: true,
    method2: false,
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div>
      <Grid container spacing={16}>
        {/* Payment methods  */}
        <Grid item xs={6}>
          <h6 className={styles.payment_title}>Payment methods</h6>
          {paymentMethods.map((payment) => (
            <div key={payment.id}>
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <div style={{ marginRight: "10px" }}>
                      <FormControlLabel
                        control={
                          <div style={{ marginRight: "10px" }}>
                            <ModifiedSwitch />
                          </div>
                        }
                      />
                    </div>
                    <ListItemAvatar>
                      <img src={payment.img} alt="store" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<React.Fragment>{payment.title}</React.Fragment>}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline", color: "#9D9D9D" }}
                            component="span"
                            variant="body2"
                          >
                            {payment.method}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </>
                  <Close
                    sx={{ cursor: "pointer", color: "gray", fontSize: "14px" }}
                  />
                </ListItem>
              </List>
              <Divider />
            </div>
          ))}
          <Button
            variant="lightblue"
            className="w-full"
            sx={{ borderRadius: "5px" }}
          >
            Add New Payment Method
          </Button>
        </Grid>

        {/* Billing information  */}
        <Grid item xs={6}>
          <h6 className={styles.payment_title}>Billing Information</h6>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputField
                label="Name"
                placeholder="Enter your name"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Address"
                placeholder="Enter address"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Country"
                placeholder="Enter country name"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Postal Code"
                placeholder="Enter postal code"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Phone Number"
                placeholder="Enter phone number"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Vat Number"
                placeholder="Enter vat number"
                type="text"
                size="small"
                shrink={true}
              />
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="lightblue"
              className="w-full"
              sx={{
                borderRadius: "5px",
                width: "auto",
                padding: "0 50px",
              }}
            >
              Save Changes
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spcing={16}>
        <Grid item xs={6}>
          <h6 className={styles.payment_title}>Invoice History</h6>
          <InvoiceHistory />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
