import { Payment } from "@mui/icons-material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPrivateOutlet from "../components/AdminPrivateOutlet";
import AffiliatePrograms from "../pages/affiliatePrograms";
import BulkPurchase from "../pages/bulkPurchase";
import Dashboard from "../pages/dashboard";
import Notification from "../pages/notification";
import Orders from "../pages/orders";
import DisputeList from "../pages/orders/disputeList.jsx";
import Payments from "../pages/payments";
import SourcingList from "../pages/sourcingList";
import NewSourcingRequest from "../pages/sourcingList/newSourcingRequest";
import ProductPage from "../pages/sourcingList/productPage";
import RequotationSourcingList from "../pages/sourcingList/requotationSourcingList";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPrivateOutlet />}>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="homepage" element={<Dashboard />} />
        <Route path="sourcing-list" element={<SourcingList />} />
        <Route path="sourcing-list/product/:id" element={<ProductPage />} />
        <Route
          path="sourcing-list/requotation"
          element={<RequotationSourcingList />}
        />
        <Route
          path="sourcing-list/new-sourcing-request"
          element={<NewSourcingRequest />}
        />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/dispute-list" element={<DisputeList />} />
        <Route path="bulk-purchase" element={<BulkPurchase />} />
        <Route path="payment" element={<Payments />} />
        <Route path="notification" element={<Notification />} />
        <Route path="affiliate-program" element={<AffiliatePrograms />} />
      </Route>
    </Routes>
  );
}
