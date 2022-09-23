import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import InputField from "../../../../../../Authentication/components/InputField";
import styles from "../../../../styles/customerStyles.module.css";
import uploadLogo from "../../../../assets/upload.png";

export default function CreateBrand() {
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: "20px" }}
      >
        <FormControlLabel
          value="thank you"
          control={<Radio />}
          label="Thank You Card"
        />
        <FormControlLabel
          value="offers"
          control={<Radio />}
          label="Offers/Promo"
        />
      </RadioGroup>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <div className={styles.paragraph_container}>
            <p className={styles.brand_para}>
              Create a personalized message for that your clients receive with
              each order through our easy to use interface. Fill out a text and
              upload an image that we can use on our "Thank you" cards.
            </p>
            <p className={styles.brand_para}>
              You could, for example offer your client a discount code for their
              next purchase and put this on the thank you card. This will
              increase your returning customers rate.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div style={{ padding: "0 20px" }}>
            <InputField
              label="Title"
              placeholder="Enter message title"
              type="text"
              size="small"
              shrink={true}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    margin: "10px 0",
                    width: "100%",
                    fontSize: "12px",
                  }}
                  label="Message"
                  color="secondary"
                  size="small"
                  placeholder="Enter message"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={8}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.image_holder}>
                  <div className={styles.imagePreviewBox}>
                    <img src={uploadLogo} alt="" />
                    <div>
                      <h6 componenet="label">Upload</h6>
                      <input hidden accept="image/*" multiple type="file" />
                    </div>
                  </div>
                  <div className="flexbox">
                    <Button
                      variant="gray"
                      sx={{
                        width: "123px",
                      }}
                    >
                      Drafts
                    </Button>
                    <Button
                      variant="lightblue"
                      className="w-full"
                      sx={{ width: "auto", borderRadius: "5px" }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
