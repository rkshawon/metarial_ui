import React, { useState } from "react";
import styles from "./uploadImage.module.css";
import uploadLogo from "../../../assets/upload.png";
import { Button, IconButton } from "@mui/material";
import notFoundImage from "../../../assets/upload2.png";
import { Edit, PhotoCamera } from "@mui/icons-material";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };
  return (
    <div style={{ width: "40%", textAlign: "left" }}>
      {image !== null && (
        <div style={{ position: "relative" }}>
          <img src={image} alt="" style={{ height: "106px", width: "100%" }} />
          <div style={{ position: "absolute", top: "0px", right: "5px" }}>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={onImageChange}
              />
              <div
                style={{
                  background: "white",
                  padding: "5px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Edit sx={{ fontSize: "15px", color: "gray" }} />
              </div>
            </IconButton>
          </div>
        </div>
      )}
      <IconButton
        color="secondary"
        aria-label="upload picture"
        component="label"
      >
        <input hidden accept="image/*" type="file" onChange={onImageChange} />
        {image === null && (
          <PhotoCamera sx={{ fontSize: "50px", color: "lightgray" }} />
        )}
      </IconButton>
    </div>
  );
}
