import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/customerStyles.module.css";
import AddressInfo from "./AddressInfo";
import ChinaWarehouseDetails from "./ChinaWarehouseDetails";

export default function ShippingTo() {
  const [chinaBtnState, setChinaBtnState] = React.useState(true);
  const [addressBtnState, setAddressBtnState] = React.useState(false);
  return (
    <div>
      <h3 className={styles.source_title}>Shipping to</h3>
      <div>
        <Button
          variant={chinaBtnState ? "purple" : "purple_outlined"}
          onClick={() => {
            setChinaBtnState(!chinaBtnState);
            setAddressBtnState(!addressBtnState);
          }}
          sx={{ width: "auto" }}
        >
          China Warehouse
        </Button>
        <Button
          variant={addressBtnState ? "purple" : "purple_outlined"}
          onClick={() => {
            setAddressBtnState(!addressBtnState);
            setChinaBtnState(!chinaBtnState);
          }}
          sx={{ width: "auto", marginLeft: "1em" }}
        >
          Address
        </Button>
      </div>
      {chinaBtnState ? (
        <ChinaWarehouseDetails isShipping={true} />
      ) : (
        <AddressInfo />
      )}

      {/* next step  */}
      <div>
        {/* <Button
          variant="contained"
          sx={{
            margin: "2em 0",
            height: "40px",
            background: "#1890FF",
            padding: "1em 1.5em",
            fontWeight: "600",
            fontSize: "15px",
            boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            "&:hover": {
              boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
            },
          }}
        >
          Next step
        </Button> */}
      </div>
    </div>
  );
}
