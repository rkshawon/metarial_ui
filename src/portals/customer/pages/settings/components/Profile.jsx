import React from "react";
import ProfileInformation from "./ProfileInformation";
import UploadImage from "./UploadImage";

export default function Profile() {
  return (
    <div>
      <UploadImage />
      <ProfileInformation />
    </div>
  );
}
