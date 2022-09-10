import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  marginTop: "20px",
  height: 18,
  borderRadius: 25,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function OrdersFulfillProgressbar() {
  return (
    <div
      style={{
        marginTop: "30px",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 16px 0 rgb(0 0 0 / 6%)",
      }}
    >
      <div className="flexbox">
        <div className="flexbox">
          <div
            style={{
              backgroundColor: "#FFDA6B",
              padding: "5px 15px",
              borderRadius: "13.5px",
            }}
          >
            0
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#2E2F39",
              fontWeight: "600",
              marginLeft: "20px",
            }}
          >
            Orders to fulfill
          </div>
        </div>
        <ArrowForwardIosIcon sx={{ fontSize: "20px", color: "lightgray" }} />
      </div>
      <div>
        <BorderLinearProgress variant="determinate" value={0} />
      </div>
    </div>
  );
}
