import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AppLayout from "../layout";

export default function ProtectedRoute({ role }) {
  const location = useLocation().pathname;

  return role === location.split("/")[1] ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/signin" />
  );
}
