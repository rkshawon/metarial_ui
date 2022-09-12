import { Close, Edit } from "@mui/icons-material";
import { Divider, FormControlLabel, Grid, List, ListItem, ListItemAvatar, ListItemText, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { bundleList, storeData } from "../../../../../../dummyData";
import styles from "../../../../styles/customerStyles.module.css";

export default function BundleList() {
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: "20px" }}
      >
        <FormControlLabel
          value="Buy X Get Y"
          control={<Radio />}
          label="Buy X Get Y"
        />
      </RadioGroup>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <div className={styles.paragraph_container}>
            <p className={styles.brand_para}>
              Create bundles to increase your average order value. If you have
              for example a 1+1 free action in your store, you can select that
              here. Title your bundle and first select a product at "when
              someone buys".
            </p>
            <p className={styles.brand_para}>
              After that you can select what your clients need to receive and
              adjust how many pieces. Also you could add more variants to the
              bundle. For example if someone orders a set, he will receive the
              product 1x in blue, 1x in black 1x in grey
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
        {bundleList.map((bundle) => (
          <div key={bundle.id}>
            <List
              sx={{ width: "100%", bgcolor: "background.paper", padding:"0" }}
            >
              <ListItem sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <>
                  <ListItemText
                    primary={
                      <React.Fragment>
                       <h5 className={styles.bundle_title}>{bundle.title}</h5> {" "}
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <span
                        //   sx={{ display: "inline", }}
                        //   component="span"
                        //   variant="body2"
                        //   color="text.primary"
                        >
                          {bundle.sub_title}
                        </span>
                      </React.Fragment>
                    }
                  />
                </>
                <>
                <Edit sx={{cursor:"pointer", color:"gray", fontSize:"14px", marginRight:"10px"}} />
                <Close sx={{cursor:"pointer", color:"gray", fontSize:"14px"}} />
                </>
              </ListItem>
            </List>
            <Divider />
          </div>
        ))}
        </Grid>
        </Grid>
    </div>
  );
}
