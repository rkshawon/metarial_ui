import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../../styles/adminStyles.module.css";

export default function OrderCircleChart({ content, tracking }) {
  const colorDecisionMaker = (type) => {
    if (type === "Awaiting" || type === "In Transit") {
      return "#9155FD";
    }
    if (type === "Processing" || type === "Picked up") {
      return "#659BF4";
    }
    if (type === "Shipped" || type === "Delivered") {
      return "#6FD226";
    } else {
      return "#FF6F6F";
    }
  };
  return (
    <div className={styles.bar_container}>
      <div style={{ width: "95px", height: "95px" }}>
        <CircularProgressbar
          value={content?.percent}
          text={`${content?.text}`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: colorDecisionMaker(content.type),
            textColor: "#5C5C5C",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div className={styles.circular_content}>
        <h6 className={styles.circular_title}>{content.type}</h6>
        <h6 className={styles.circular_title}>Orders</h6>
        {!tracking && (
          <h6 style={{ color: colorDecisionMaker(content.type) }}>
            <strong style={{ fontSize: "16px" }}>$1205.72</strong>
          </h6>
        )}
      </div>
    </div>
  );
}
