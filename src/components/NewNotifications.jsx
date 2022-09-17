import React from "react";
import styles from "../styles/globalStyles.module.css";
import { notifications, OldNotifications } from "./dummyNotification";
import { AccessTime } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function NewNotifications() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <h5 style={{ color: "gray", margin: "10px 20px" }}>NEW</h5>
        {notifications.map((notification) => (
          <div className={styles.newNotificationBox} key={notification.id}>
            <div style={{ display: "flex" }}>
              <img
                src={notification.img}
                alt="img"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: 20,
                }}
              />
              <div>
                <h6
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.5",
                    fontSize: "0.88",
                    margin: 0,
                  }}
                >
                  {notification.title}{" "}
                  <span style={{ color: "gray", fontWeight: 300 }}>
                    {notification.subTitle}
                  </span>
                </h6>
                <div className="flexbox">
                  <h6
                    style={{
                      color: "rgb(145, 158, 171",
                      fontWeight: 400,
                      fontSize: "0.75rem",
                      marginTop: "5px",
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <AccessTime
                      style={{ fontSize: "0.75rem", marginRight: 5 }}
                    />
                    {notification.time}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* before that */}
      <div>
        <h5 style={{ color: "gray", margin: "10px 20px" }}>BEFORE THAT</h5>
        {OldNotifications.map((notification) => (
          <div
            className={styles.newNotificationBox}
            style={{ background: "#fff" }}
            key={notification.id}
          >
            <div style={{ display: "flex" }}>
              <img
                src={notification.img}
                alt="img"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: 20,
                }}
              />
              <div>
                <h6
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.5",
                    fontSize: "0.88",
                    margin: 0,
                  }}
                >
                  {notification.title}{" "}
                  <span style={{ color: "gray", fontWeight: 300 }}>
                    {notification.subTitle}
                  </span>
                </h6>
                <div className="flexbox">
                  <h6
                    style={{
                      color: "rgb(145, 158, 171",
                      fontWeight: 400,
                      fontSize: "0.75rem",
                      marginTop: "5px",
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <AccessTime
                      style={{ fontSize: "0.75rem", marginRight: 5 }}
                    />
                    {notification.time}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div style={{padding:"0px 20px"}}>
        <Button variant="purple_outlined">View all</Button>
      </div> */}
      {/* <div style={{position:'fixed', bottom:5, width:"24%",}}>
        <Button variant="purple_outlined">View all</Button>
      </div> */}
    </div>
  );
}
