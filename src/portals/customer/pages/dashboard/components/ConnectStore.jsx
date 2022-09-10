import React from "react";
import styles from "../../../styles/customerStyles.module.css";
import store from "../../../assets/shopify2.png";
import InputField from "../../../../../Authentication/components/InputField";
import { Button, InputLabel } from "@mui/material";

export default function ConnectStore({ closeModal }) {
  return (
    <div>
      <h2 className={styles.welcome_popup}>
        Connect your Shopify Store to U - SEND
      </h2>
      <div style={{ margin: "50px 0px" }}>
        <img src={store} alt="store" />
      </div>
      <p style={{ marginBottom: "20px" }}>
        Enter your existing Shopify store URL (store.myshopify.com) to start
        synchronizing the needed data from your Shopify store. After proceeding
        you will be redirected to Shopify to connect your store to the U-Send
        Platform.
      </p>

      <div className={styles.connect_store}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            margin: "auto",
          }}
        >
          <InputField
            fullWidth
            //   label="Login E-mail or Phone"
            placeholder="store-name.myshopify.com"
            type="text"
            size="meduim"
          />
          <Button
            // className={classes.button}
            variant="lightblue"
            color="primary"
            onClick={closeModal}
            sx={{
              width: "auto",
              zIndex: "99",
              height: "44px",
              marginLeft: "-8px",
            }}
            // onClick={handleNext}
          >
            Connect Store
          </Button>
        </div>
      </div>
    </div>
  );
}
