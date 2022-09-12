import { Button, Grid } from "@mui/material";
import React from "react";
import InputField from "../../../../../Authentication/components/InputField";
import styles from "../../../styles/customerStyles.module.css";

export default function ProfileInformation() {
  return (
    <div>
      <Grid container spacing={28}>
        <Grid item xs={6}>
          <h4 className={styles.profile_title}>Profile Information</h4>
          <InputField
            label="Name"
            placeholder="Type your name"
            type="text"
            size="small"
          />
          <InputField
            label="Email Address"
            placeholder="Type your email "
            type="text"
            size="small"
          />
          <InputField
            label="Phone Number"
            placeholder="Type your phone number"
            type="text"
            size="small"
          />
          <InputField
            label="VAT Identification Number"
            placeholder="Type your vat identification number "
            type="text"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <h4 className={styles.profile_title}>Change Password</h4>
          <InputField
            label="Current Password"
            placeholder="Type current password"
            type="text"
            size="small"
          />
          <InputField
            label="New Password"
            placeholder="Type your new password"
            type="text"
            size="small"
          />
          <InputField
            label="Confirm Password"
            placeholder="Type your confirm password"
            type="text"
            size="small"
          />
          <Button
            variant="lightblue"
            className="w-full"
            sx={{
              borderRadius: "5px",
              height: "38px",
            }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
