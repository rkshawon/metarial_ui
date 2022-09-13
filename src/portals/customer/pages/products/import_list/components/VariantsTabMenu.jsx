import { Add } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import styles from "../importLIstStyles.module.css";

export default function VariantsTabMenu({ data }) {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item sm={3}>
          <img
            src={data.product.img}
            alt="import product"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item sm={9}>
          <div className="flexbox">
            <div>
              <h4 style={{ fontSize: "18px" }}>{data.product.title}</h4>
              <h6 style={{ marginTop: "10px" }}>
                by:{" "}
                <b style={{ color: "#3366FF" }}>Bashundara Official Store</b>
              </h6>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            similique voluptatibus fugit explicabo optio porro, omnis provident
            autem exercitationem minus hic impedit amet ex. Expedita labore
            voluptate debitis velit ut!
          </p>
          <div className={styles.variantBoxContainer}>
            <div className={styles.variantBox1}></div>
            <div className={styles.variantBox2}></div>
            <div className={styles.variantBox3}></div>
            <div className={styles.variantBox4}></div>
            <Button
              variant="purple_outlined"
              sx={{ width: "auto", margin: 0 }}
              startIcon={<Add sx={{ color: "#8D40FF" }} />}
            >
              Add Variant
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
