import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { NavbarMobile } from "components/NavbarMobile";
import { Navbar } from "components/Navbar";

import "./BaseLayout.scss";

const BaseLayout: FC = () => {
  const className = "layout";

  return (
    <div className={className}>
      <Navbar />
      <NavbarMobile />

      <Outlet />
    </div>
  );
};

export default BaseLayout;
