import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { ControlPoint, Delete } from "@mui/icons-material";
import styles from '../importLIstStyles.module.css'

export default function VariantActions() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SaveIcon className={styles.variantActions} />
      {/* <Delete sx={{ margin:"0px 5px" }} className={styles.variantActions} /> */}
      {/* <ControlPoint className={styles.variantActions}/> */}
    </div>
  );
}
