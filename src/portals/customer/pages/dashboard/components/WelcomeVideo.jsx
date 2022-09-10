import React from "react";
import styles from "../../../styles/customerStyles.module.css";
import eye from "../../../assets/eye.png";

export default function WelcomeVideo() {
  return (
    <div>
      <h2 className={styles.welcome_popup}>
        Welcome to <span className={styles.u_send}>U-SEND</span>
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginRight: 10 }}>Lets show you around</h3>
        <img src={eye} alt="eye" />
      </div>
      <div>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/8UlLgOf20Ho"
          title="Getting the Basics - Software Architecture Introduction (part 1)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <h6 style={{ textAlign: "right", cursor: "pointer", marginRight: 30 }}>
          Skip
        </h6> */}
      </div>
    </div>
  );
}
