import styles from "../styles/customerStyles.module.css";

export const getStatusDesignMaker = (params) => {
  if (params.value === "Shipped") {
    return (
      <div
        style={{
          background: "#D4FFD3",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  }
  if (params.value === "Fulfilled") {
    return (
      <div
        style={{
          background: "#E9DAFF",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "#FEFFCF",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  }
};
