import { Check } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const getChipProps = (params) => {
  if (params.value === "Paid") {
    return {
      icon: <Check style={{ fill: "#05AE01" }} />,
      label: (
        <strong style={{ color: "#05AE01", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  }
  if (params.value === "Failed") {
    return {
      icon: <Check style={{ fill: "#FF7E7E" }} />,
      label: (
        <strong style={{ color: "#FF7E7E", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#FFF0F0",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  }

  if (params.value === "In Stock") {
    return {
      icon: <Check style={{ fill: "#05AE01" }} />,
      label: (
        <strong style={{ color: "#05AE01", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  }
  if (params.value === "Stock out") {
    return {
      icon: <Check style={{ fill: "#FF7E7E" }} />,
      label: (
        <strong style={{ color: "#FF7E7E", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#FFF0F0",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  } else if (params.value === "Delivered") {
    return {
      icon: <Check style={{ fill: "#05AE01" }} />,
      label: (
        <strong style={{ color: "#05AE01", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  } else if (params.value === "Unshipped") {
    return {
      icon: <CloseIcon style={{ fill: "#FF7E7E" }} />,
      label: (
        <strong style={{ color: "#FF7E7E", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        borderRadius: "5px",
        background: "#FFF0F0",
        color: "#05AE01",
        border: "1px solid #FFF0F0",
      },
    };
  } else if (params.value === "Completed") {
    return {
      icon: <Check style={{ fill: "#05AE01" }} />,
      label: (
        <strong style={{ color: "#05AE01", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        borderRadius: "5px",
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
      },
    };
  } else if (params.value === "Picked up") {
    return {
      icon: <AccessTimeIcon style={{ fill: "#8D40FF" }} />,
      label: (
        <strong style={{ color: "#8D40FF", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#E9DAFF",
        border: "1px solid #E9DAFF",
        borderRadius: "5px",
      },
    };
  } else {
    return {
      icon: <AccessTimeIcon style={{ fill: "#E0A816" }} />,
      label: (
        <strong style={{ color: "#E0A816", fontSize: "10px" }}>
          {params.value}
        </strong>
      ),
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
        borderRadius: "5px",
      },
    };
  }
};
