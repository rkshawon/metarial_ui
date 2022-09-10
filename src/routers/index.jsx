import React, { Fragment } from "react";
import AuthRoutes from "../Authentication/routes";
import AdminRoutes from "../portals/admin/routes";
import CustomerRoutes from "../portals/customer/routes";
import SupplierRoutes from "../portals/supplier/routes";

export default function AppRouters() {
  return (
    <>
      <AuthRoutes />
      <AdminRoutes />
      <CustomerRoutes />
      <SupplierRoutes />
    </>
  );
}
