import { Check } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const getChipProps = (params) => {
  if (params.value === "Paid") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "10px",
      },
    };
  }
  if (params.value === "Failed") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FFF0F0",
        border: "1px solid #D4FFD3",
        borderRadius: "10px",
      },
    };
  }

  if (params.value === "In Stock") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "10px",
      },
    };
  }
  if (params.value === "Stock out") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FFF0F0",
        border: "1px solid #D4FFD3",
        borderRadius: "10px",
      },
    };
  } else if (params.value === "Delivered") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "10px",
      },
    };
  } else if (params.value === "Unshipped") {
    return {
      icon: <CloseIcon style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        borderRadius: "10px",
        background: "#FFF0F0",
        border: "1px solid #FFF0F0",
      },
    };
  } else if (params.value === "Completed") {
    return {
      icon: <Check style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        borderRadius: "10px",
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
      },
    };
  } else if (params.value === "Picked up") {
    return {
      icon: <AccessTimeIcon style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#E9DAFF",
        border: "1px solid #E9DAFF",
        borderRadius: "10px",
      },
    };
  } else {
    return {
      icon: <AccessTimeIcon style={{ fill: "#000" }} />,
      label: <strong style={{ fontSize: "12px" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
        borderRadius: "10px",
      },
    };
  }
};
