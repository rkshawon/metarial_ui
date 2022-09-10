import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route exact path="/*">
        <Route path="" element={<h2>This is landing page</h2>} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
