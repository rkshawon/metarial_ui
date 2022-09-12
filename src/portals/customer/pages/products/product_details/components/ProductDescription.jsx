import styles from "../../../../styles/customerStyles.module.css";

export default function ProductDescription() {
  return (
    <div>
      <h3 className={styles.product_info_title} style={{ margin: "20px 0px" }}>
        Product Description
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
        facilis nostrum eos blanditiis illo repudiandae veniam, autem architecto
        rem eius reprehenderit neque voluptatibus voluptate aspernatur
        dignissimos porro unde quaerat. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe eum facilis nostrum eos blanditiis illo
        repudiandae veniam, autem architecto rem eius reprehenderit neque
        voluptatibus voluptate aspernatur dignissimos porro unde quaerat.
      </p>
    </div>
  );
}
