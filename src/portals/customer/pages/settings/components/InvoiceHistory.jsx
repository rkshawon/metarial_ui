import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { invoiceHistory } from "../../../../../dummyData";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {invoiceHistory.map((invoice) => (
          <div className="flexbox">
            <h6>{invoice.date}</h6>
            <h6>{invoice.amount}</h6>
            <img src={invoice.icon} alt="icon" />
          </div>
        ))}
      </ListItemButton>
    </ListItem>
  );
}

export default function InvoiceHistory() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        bgcolor: "background.paper",
        overflow:"scroll",
        padding: "0px 20px 0px 0px"
      }}
    >
      {invoiceHistory.map((invoice) => (
        <div>
          <div className="flexbox">
            <h6>{invoice.date}</h6>
            <h6>{invoice.amount}</h6>
            <img src={invoice.icon} alt="icon" />
          </div>
        </div>
      ))}
    </Box>
  );
}
