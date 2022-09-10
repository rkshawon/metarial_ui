import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import styles from "../styles/authStyles.module.css";
import logo from "../../assets/img/logo.png";
import React from "react";
import WelcomeTitle from "../components/WelcomeTitle";
import InputField from "../components/InputField";

export default function Signin() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={styles.signin_left}>
            <div>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <h1>The Ultimate</h1>
              <h1>Dropshipping Solution</h1>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.signin_right}>
            <WelcomeTitle
              title="Welcome Back"
              subTitle="Lets build success together"
            />
            <div className={styles.form}>
              <InputField
                label="Login E-mail or Phone"
                placeholder="Type your email or phone "
                type="text"
                size="small"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                size="small"
              />
              <div className="flexbox">
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                <a href="#">Forgot password?</a>
              </div>
              <div className={styles.button_part}>
                <Button variant="lightblue" className="w-full">
                  Login
                </Button>
                <h6>Don,t have an account? Sign up for free</h6>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
