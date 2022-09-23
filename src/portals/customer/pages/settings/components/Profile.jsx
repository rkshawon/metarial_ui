import React from "react";
import ProfileInformation from "./ProfileInformation";
import UploadImage from "./UploadImage";

export default function Profile() {
  return (
    <div style={{marginTop:"20px"}}>
      <UploadImage />
      <ProfileInformation />
    </div>
  );
}
