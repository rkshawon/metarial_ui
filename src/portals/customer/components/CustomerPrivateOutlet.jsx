import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function CustomerPrivateOutlet() {
  const auth = JSON.parse(localStorage.getItem("user_info"));

  return auth?.user?.role !== "customer" ? <Outlet /> : <Navigate to="/" />;
}
