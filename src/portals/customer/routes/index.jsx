import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomerPrivateOutlet from "../components/CustomerPrivateOutlet";
import BulkPurchase from "../pages/bulk_purchase";
import FinalizePurchaseStepper from "../pages/bulk_purchase/components/FinalizePurchaseStepper";
import Dashboard from "../pages/dashboard";
import ExtraStorage from "../pages/extra_storage";
import Notification from "../pages/notification";
import Order from "../pages/orders";
import DisputeList from "../pages/orders/dispute_list";
import OrderTracking from "../pages/orders/order_tracking";
import Payment from "../pages/payments";
import Product from "../pages/products";
import Branding from "../pages/products/branding";
import ImportList from "../pages/products/import_list";
import EditImportProduct from "../pages/products/import_list/EditImportProduct/indes";
import LiveProducts from "../pages/products/live_products";
import ProductBundle from "../pages/products/product_bundle";
import ProductDetails from "../pages/products/product_details/ProductDetails";
import Settings from "../pages/settings";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/customer/*" element={<CustomerPrivateOutlet />}>
        <Route path="" element={<Navigate to="homepage" />} />
        <Route path="homepage" element={<Dashboard />} />
        <Route path="products" element={<Product />} />
        <Route path="stepper" element={<FinalizePurchaseStepper />} />
        <Route path="products/branding" element={<Branding />} />
        <Route path="products/bundle" element={<ProductBundle />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products/live-products" element={<LiveProducts />} />
        <Route path="products/import-list" element={<ImportList />} />
        <Route
          path="products/import-list/product/:id"
          element={<EditImportProduct />}
        />
        <Route path="orders" element={<Order />} />
        <Route path="orders/dispute-list" element={<DisputeList />} />
        <Route path="orders/order-tracking" element={<OrderTracking />} />
        <Route path="bulk" element={<BulkPurchase />} />
        <Route path="payments" element={<Payment />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="storage" element={<ExtraStorage />} />
        <Route path="setting" element={<Settings />} />
      </Route>
    </Routes>
  );
}
