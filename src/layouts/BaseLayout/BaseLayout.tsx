import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "components/Navbar";

import "./BaseLayout.scss";

const BaseLayout = () => {
  const className = "layout";

  return (
    <div className={className}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
