import styles from "../styles/customerStyles.module.css";

export const getDisputeFulfilmentDesign = (value) => {
  if (value === "Shipped" || value === "POD") {
    return (
      <div
        style={{
          background: "#D4FFD3",
          
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
          background: "#DDF1FF"
          
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
          
        }}
        className={styles.fulfillment}
      >
        {value}
      </div>
    );
  }
};
