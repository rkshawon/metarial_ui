import {
  Autocomplete,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import InputField from "../../../../../../Authentication/components/InputField";
import styles from "../../../../styles/adminStyles.module.css";
import store from "../../../../assets/shopify.png";
import { dummyOrders } from "../dummyData";
import DisputeProofContent from "./DisputeProofContent";

export default function DisputeRequestModalContent({
  closeModal,
  isClose,
  setClose,
}) {
  const [order, setOrder] = useState(" ");

  function getOrderStatusProps(params) {
    if (params.status === "Delivered") {
      return (
        <div
          style={{
            background: "#D4FFD3",
            color: "#05AE01",
          }}
          className={styles.fulfillment}
        >
          {params.status}
        </div>
      );
    }
    if (params.status === "POD") {
      return (
        <div
          style={{
            background: "#E9DAFF",
            color: "#8D40FF",
          }}
          className={styles.fulfillment}
        >
          {params.status}
        </div>
      );
    } else {
      return (
        <div
          style={{
            background: "#FEFFCF",
            color: "#E0A816",
          }}
          className={styles.fulfillment}
        >
          {params.status}
        </div>
      );
    }
  }
  return (
    <div>
      {!isClose && (
        <>
          <h2 className={styles.welcome_popup}>Dispute Request</h2>
          <h3 style={{ marginRight: 10 }}>Create dispute request</h3>
          <img src={store} alt="" />

          {/* Dispute request form  */}
          <div>
            <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
              Select Orders
            </InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={dummyOrders}
              clearOnBlur={true}
              sx={{ width: "100%", margin: "10px 0" }}
              size="small"
              shrink={false}
              onChange={(event, value) => {
                if (value.orderId) {
                  setOrder(value);
                } else {
                  setOrder("Search Orders");
                }
              }}
              value={order?.orderId + " - " + order?.label || order}
              renderInput={(params) => {
                console.log(params);
                return <TextField {...params} />;
              }}
            />
            {order?.orderId && (
              <div className="flexbox">
                <h6>{order.orderId}</h6>
                <h6>{order.label}</h6>
                <h6>{order.date}</h6>

                <>{getOrderStatusProps(order)}</>
              </div>
            )}
            <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
              Dispute Issue
            </InputLabel>
            <FormControl fullWidth>
              <InputLabel
                id="dispute-issue"
                sx={{ margin: 0, textAlign: "left", color: "lightgray" }}
              >
                Choose your dispute issue
              </InputLabel>
              <Select
                labelId="dispute-issue"
                id="demo-select-small"
                sx={{
                  margin: "10px 0",
                  width: "100%",
                  height: "38px",
                }}
                //   value={age}
                //   onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
              Dispute Outcome
            </InputLabel>
            <FormControl fullWidth>
              <InputLabel id="dispute-outcome" sx={{ color: "lightgray" }}>
                Choose your dispute outcome
              </InputLabel>
              <Select
                labelId="dispute-outcome"
                id="demo-select-small"
                sx={{
                  margin: "10px 0",
                  width: "100%",
                  height: "38px",
                }}
                //   value={age}
                // label="Choose your dispute issue"
                //   onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div style={{ position: "relative" }}>
              <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
                Upload Attachments
              </InputLabel>
              <InputField
                placeholder="Type your notes"
                type="text"
                size="small"
              />
              <IconButton
                //   color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ position: "absolute", bottom: 10, right: 10 }}
              >
                <input hidden accept="image/*" type="file" />
                <DriveFolderUploadIcon />
              </IconButton>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{
              margin: "10px 0 0 0",
              height: "40px",
              fontWeight: "600",
              fontSize: "15px",
              background: "#1890FF",
              boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
              "&:hover": {
                boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
              },
            }}
            onClick={() => {
              setClose(true);
            }}
          >
            Submit Request
          </Button>
        </>
      )}
      {isClose && <DisputeProofContent />}
    </div>
  );
}
