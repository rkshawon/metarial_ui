import {
  Backdrop,
  Badge,
  Box,
  Button,
  Divider,
  Fade,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { Notifications, DoneAll } from "@mui/icons-material";
import NewNotifications from "./NewNotifications";
import { Icon } from "@iconify/react";

const style = {
  position: "absolute",
  top: "10%",
  right: "7%",
  width: "25%",
  height: "550px",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "#fff",
  border: "none",
  boxShadow: "none",
  outline: "none",
  //   padding: "20px",
};

export default function NotificationModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Badge
        badgeContent={2}
        color="error"
        size="small"
        sx={{
          "& .MuiBadge-badge": {
            padding: 0,
            fontSize: "10px",
            fontWeight: 700,
          },
        }}
        onClick={handleOpen}
      >
        <Icon
          icon="eva:bell-fill"
          width="20"
          height="20"
          style={{ color: "rgb(99, 115, 129)" }}
        />
      </Badge>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="">
            <div
              className="flexbox"
              style={{
                textAlign: "left",
                padding: "20px",
                borderBottom: "0.5px dashed lightgray",
              }}
            >
              <div style={{}}>
                <h5
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.5",
                    fontSize: "1rem",
                  }}
                >
                  Notifications
                </h5>
                <h6
                  style={{
                    marginTop: 10,
                    marginBottom: 0,
                    color: "rgb(99, 115, 129)",
                  }}
                >
                  You have 2 unread messages
                </h6>
              </div>
              <DoneAll style={{ color: "#36ba59" }} />
            </div>
            <div
              style={{
                textAlign: "left",
                height: "400px",
                overflowY: "scroll",
              }}
              className="hide_scrollbar"
            >
              {/* <Divider /> */}
              <NewNotifications />
            </div>
            {/* <Divider sx={{ border: "0.5px dashed lightgray" }} /> */}
            <div
              style={{
                textAlign: "center",
                margin: "10px 0px",
                padding: "10px 20px 0px 20px",
                borderTop: "0.5px dashed lightgray",
              }}
            >
              <Button variant="title_purple">View all</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
