import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/customerStyles.module.css";
import img from "../../../assets/img.png";

export default function UploadImage() {
  return (
    <div className={styles.upload_image}>
      <h4 className={styles.profile_title}>Profile Photo</h4>

      {/* upload image part */}
      <div className={styles.setup_img}>
        <img src={img} alt="" />
        <Button
          variant="outlined"
          component="label"
          sx={{
            background: "#FFFFFF",
            border: "1px solid #C2C2C2",
            borderRadius: "5px",
            color: "#828282",
            marginLeft: "20px",
          }}
        >
          Change photo
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
    </div>
  );
}
