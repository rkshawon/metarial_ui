import styles from "../../../styles/customerStyles.module.css";

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

export default function ModifiedSelectItem({ open, setOpen, getValue }) {
  if (open) {
    return (
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: "99",
          marginTop: "5px",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px 0px rgba(36,36,36,0.75)",
          padding: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 25px",
            borderBottom: "1px solid #dce0dd",
          }}
        >
          <h5 style={{ width: "200px", maxWidth: "300px" }}>
            Shipping Company
          </h5>
          <h5 style={{ width: "120px", maxWidth: "120px" }}>Shipping Cost</h5>
          <h5 style={{ width: "120px", maxWidth: "120px" }}>Delivery Time</h5>
          <h5 style={{ width: "120px", maxWidth: "120px" }}>Tracking</h5>
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
                style={{ width: "200px", maxWidth: "300px", fontSize: "12px" }}
                onClick={() => getValue(data.name)}
              >
                {data.name}
              </p>
              <p
                style={{ width: "120px", maxWidth: "120px", fontSize: "12px" }}
                onClick={() => getValue(data.name)}
              >
                {data.cost}
              </p>
              <p
                style={{ width: "120px", maxWidth: "120px", fontSize: "12px" }}
                onClick={() => getValue(data.name)}
              >
                {data.time}
              </p>
              <p
                style={{ width: "120px", maxWidth: "120px", fontSize: "12px" }}
                onClick={() => getValue(data.name)}
              >
                {data.tracking}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
