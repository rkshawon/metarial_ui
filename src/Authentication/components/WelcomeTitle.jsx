import React from "react";
import handLogo from "../../assets/img/hand.png";

export default function WelcomeTitle({ title, subTitle }) {
  return (
    <div>
      <img style={{ transform: "scaleX(-1)" }} src={handLogo} alt="logo" />
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
}
