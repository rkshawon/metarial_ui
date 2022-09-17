import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function SupplierPrivateOutlet() {
  const auth = JSON.parse(localStorage.getItem("user_info"));

  return auth?.user?.role === "supplier" ? <Outlet /> : <Navigate to="/" />;
}
