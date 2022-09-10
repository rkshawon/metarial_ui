import styles from "../styles/customerStyles.module.css";

export const chipColorDecisionMaker = (type) => {
  if (type === "All") {
    return (
      <div
        style={{
          background: "rgba(174, 205, 255, 0.5)",
          color: "#1890FF",
        }}
        className={styles.order_tabs}
      >
        25
      </div>
    );
  }
  if (type === "Waiting" || type === "Completed") {
    return (
      <div
        style={{
          background: "rgba(145, 85, 253, 0.25)",
          color: "#9025FA",
        }}
        className={styles.order_tabs}
      >
        17
      </div>
    );
  }
  if (type === "Processing") {
    return (
      <div
        style={{
          background: "rgba(102, 155, 244, 0.29)",
          color: "#669BF4",
        }}
        className={styles.order_tabs}
      >
        21
      </div>
    );
  }
  if (type === "Shipped") {
    return (
      <div
        style={{
          background: "rgba(112, 210, 40, 0.31)",
          color: "#6FD226",
        }}
        className={styles.order_tabs}
      >
        9
      </div>
    );
  }
  if (type === "Pending") {
    return (
      <div
        style={{
          background: "rgba(248, 55, 58, 0.17)",
          color: "#FF1818",
        }}
        className={styles.order_tabs}
      >
        9
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "#FFCFCF",
          color: "#FF7E7E",
        }}
        className={styles.order_tabs}
      >
        3
      </div>
    );
  }
};
