import styles from "../styles/customerStyles.module.css";

export const getStatusDesignMaker = (params) => {
  if (params.value === "Shipped") {
    return (
      <div
        style={{
          background: "#D4FFD3",
          color: "#05AE01",
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
          color: "#8D40FF",
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
          color: "#E0A816",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  }
};
