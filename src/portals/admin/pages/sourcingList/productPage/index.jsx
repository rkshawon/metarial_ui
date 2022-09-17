import React from "react";
import { product_cards } from "../../../../../dummyData";
import AppLayout from "../../../../../layout/DashboardLayout";
import ProductDetails from "./components/ProductDetails";

export default function ProductPage() {
  return (
    <AppLayout>
      <div style={{ marginBottom: "36px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#212B36",
            marginBottom: "36px",
          }}
        >
          Product YTFW0034
        </h2>

        <ProductDetails product={product_cards[0]} />
      </div>
    </AppLayout>
  );
}
