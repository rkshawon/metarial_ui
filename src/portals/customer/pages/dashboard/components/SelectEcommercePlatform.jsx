import React from "react";
import styles from '../../../styles/customerStyles.module.css'
import store from '../../../assets/store.PNG'

export default function SelectEcommercePlatform() {
  return (
    <div>
      <h2 className={styles.welcome_popup}>Select your E-commerce platform</h2>
      <div style={{margin:"20px 0px"}}>
      <img src={store} alt="store"/>
      </div>
    </div>
  );
}
