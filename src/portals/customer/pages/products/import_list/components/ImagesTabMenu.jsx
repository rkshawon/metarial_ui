import { Grid, InputLabel } from "@mui/material";
import React from "react";
import ProductImageGallery from "../../../../../admin/pages/sourcingList/productPage/components/ProductImageGallery";
import UploadImage from "../../components/UploadImage";

export default function ImagesTabMenu({ data }) {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <ProductImageGallery />
        </Grid>
        <Grid item xs={8}>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            similique voluptatibus fugit explicabo optio porro, omnis provident
            autem exercitationem minus hic impedit amet ex. Expedita labore
            voluptate debitis velit ut!
          </p>
          <div style={{marginTop:20}}>
            <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
              Upload Image
            </InputLabel>
            <UploadImage />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
