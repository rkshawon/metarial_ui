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
import styles from "../../../../styles/customerStyles.module.css";
import store from "../../../../assets/shopify.png";
import { dummyOrders } from "../dummyData";
import DisputeProofContent from "./DisputeProofContent";
import ProductTags from "../../../products/import_list/components/ProductTags";

export default function DisputeRequestModalContent({
  closeModal,
  isClose,
  setClose,
}) {
  const [order, setOrder] = useState(" ");
  const [issue, setIssue] = useState("");
  const [outcome, setOutcome] = useState("");

  const handleDisputeIssue = (e) => {
    setIssue(e.target.value);
  };

  console.log(issue);
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

  const Placeholder = ({ children }) => {
    return (
      <span style={{ color: "lightgray", fontSize: "14px", textAlign: "left" }}>
        {children}
      </span>
    );
  };

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
              <Select
                displayEmpty
                sx={{
                  margin: "10px 0",
                  width: "100%",
                  height: "38px",
                  textAlign: "left",
                }}
                renderValue={
                  issue !== ""
                    ? undefined
                    : () => <Placeholder>Choose disute issue</Placeholder>
                }
                value={issue}
                onChange={handleDisputeIssue}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Damaged/wrong product">
                  Damaged/wrong product
                </MenuItem>
                <MenuItem value="Proof document">Proof document </MenuItem>
                <MenuItem value="Lost tracking">Lost tracking</MenuItem>
              </Select>
            </FormControl>

            <InputLabel sx={{ margin: 0, textAlign: "left", color: "#000" }}>
              Dispute Outcome
            </InputLabel>
            {issue !== "Proof document" && (
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  sx={{
                    margin: "10px 0",
                    width: "100%",
                    height: "38px",
                    textAlign: "left",
                  }}
                  renderValue={
                    outcome !== ""
                      ? undefined
                      : () => <Placeholder>Choose disute outcome</Placeholder>
                  }
                  value={outcome}
                  // label="Choose your dispute issue"
                  onChange={(e) => setOutcome(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {issue !== "Proof document" && (
                    <>
                      <MenuItem value="Resend">Resend</MenuItem>
                      <MenuItem value="Refund">Refund</MenuItem>
                    </>
                  )}
                </Select>
              </FormControl>
            )}
            {issue === "Proof document" && (
              <ProductTags
                names={[
                  "Proof of delivery",
                  "Proof of shipping",
                  "Waybill",
                  "Local Tracking",
                ]}
              />
            )}
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
            variant="lightblue"
            sx={{
              width: "auto",
              borderRadius: "5px",
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
