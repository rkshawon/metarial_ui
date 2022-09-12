import { Close, CropSquareSharp } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { storeData } from "../../../../../dummyData";
import styles from "../../../styles/customerStyles.module.css";

export default function Store() {
  return (
    <div>
      <h6 className={styles.profile_title}>
        Here you can check which Shops are connected to the U-Send portal. Also
        you are able to pair new stores from “Connect Store” tab.
      </h6>
      <div className={styles.store_list}>
        {storeData.map((store) => (
          <div key={store.id}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <>
                  <ListItemAvatar>
                    <img src={store.img} alt="store" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        {store.title}{" "}
                        <span style={{ color: "#8D40FF" }}>{store.store}</span>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {store.sub_title}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </>
                <Close
                  sx={{ cursor: "pointer", color: "gray", fontSize: "14px" }}
                />
              </ListItem>
            </List>
            <Divider />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="lightblue" sx={{ borderRadius: "5px", width: "auto" }}>
          Connect Store
        </Button>
      </div>
    </div>
  );
}
