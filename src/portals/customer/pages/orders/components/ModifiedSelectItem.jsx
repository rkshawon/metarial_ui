import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/customerStyles.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const rowData = [
  {
    name: "Company",
    cost: 12,
    time: 1.24,
    tracking: 40,
  },
  {
    name: "Company1",
    cost: 12,
    time: 1.24,
    tracking: 40,
  },
  {
    name: "Company12",
    cost: 12,
    time: 1.24,
    tracking: 40,
  },
  {
    name: "Company11",
    cost: 12,
    time: 1.24,
    tracking: 40,
  },
];

export default function ModifiedSelectItem() {
  const [value, setValue] = useState("Select");
  const [open, setOpen] = useState(false);

  const itemChange = (event) => {
    setOpen(!open);
  };
  const getValue = (v) => {
    setValue(v);
  };

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative", marginLeft: "5px" }}>
      <div
        onClick={itemChange}
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          border: "1px solid #C1C1C1",
          padding: "2px 8px",
          borderRadius: "5px",
          color: "#6b6b6b",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "12px" }}>{value}</p>
        {open ? (
          <KeyboardArrowUpIcon fontSize="small" sx={{ color: "#b8b8b8" }} />
        ) : (
          <KeyboardArrowDownIcon fontSize="small" sx={{ color: "#b8b8b8" }} />
        )}
      </div>
      {open && (
        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            zIndex: "99",
            marginTop: "5px",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px 1px rgba(36,36,36,0.55)",
            padding: "0px",
            width: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              borderBottom: "1px solid #dce0dd",
            }}
          >
            <h5 style={{ width: "200px", maxWidth: "300px" }}>
              Shipping Company
            </h5>
            <h5 style={{ width: "100px", maxWidth: "120px" }}>Shipping Cost</h5>
            <h5 style={{ width: "100px", maxWidth: "120px" }}>Delivery Time</h5>
            <h5 style={{ width: "80px", maxWidth: "120px" }}>Tracking</h5>
          </div>
          {rowData.map((data, index) => {
            return (
              <div
                key={index}
                className={styles.select_company_name}
                style={{
                  display: "flex",
                  borderBottom: "1px solid #e3e6e4",
                  padding: "10px 25px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              >
                <p
                  style={{
                    width: "200px",
                    maxWidth: "300px",
                    fontSize: "12px",
                  }}
                  onClick={() => getValue(data.name)}
                >
                  {data.name}
                </p>
                <p
                  style={{
                    width: "100px",
                    maxWidth: "120px",
                    fontSize: "12px",
                  }}
                  onClick={() => getValue(data.name)}
                >
                  {data.cost}
                </p>
                <p
                  style={{
                    width: "100px",
                    maxWidth: "120px",
                    fontSize: "12px",
                  }}
                  onClick={() => getValue(data.name)}
                >
                  {data.time}
                </p>
                <p
                  style={{ width: "80px", maxWidth: "120px", fontSize: "12px" }}
                  onClick={() => getValue(data.name)}
                >
                  {data.tracking}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
