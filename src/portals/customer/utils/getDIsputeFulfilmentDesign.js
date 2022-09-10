import styles from "../styles/customerStyles.module.css";

export const getDisputeFulfilmentDesign = (value) => {
  if (value === "Shipped" || value === "POD") {
    return (
      <div
        style={{
          background: "#D4FFD3",
          color: "#05AE01",
          width: "100%",
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  }
  if (value === "Fulfilled" || value === "POS") {
    return (
      <div
        style={{
          background: "#E9DAFF",
          color: "#8D40FF",
          width: "100%",
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  }
  if (value === "Local Tracking") {
    return (
      <div
        style={{
          background: "#FEFFCF",
          color: "#E0A816",
          width: "100%",
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  }
  if (value === "Resend") {
    return (
      <div
        style={{
          background: "#DDF1FF",
          color: "#3366FF",
          width: "100%",
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "#F4F4F4",
          color: "#939393",
          width: "100%",
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  }
};
