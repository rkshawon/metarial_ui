import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SupplierPrivateOutlet from "../components/SupplierPrivateOutlet";
import Dashboard from "../pages/dashboard";

export default function SupplierRoutes() {
  return (
    <Routes>
      <Route path="/supplier/*" element={<SupplierPrivateOutlet />}>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
