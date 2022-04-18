import React from "react";

import { LockedLayout } from "layouts/LockedLayout";
import { Home } from "containers/Home";

const HomeView = () => {
  return (
    <LockedLayout>
      <Home />
    </LockedLayout>
  );
};

export default HomeView;
