import React, { FC } from "react";

import { LockedLayout } from "layouts/LockedLayout";
import { Home } from "containers/Home";

const HomeView: FC = () => {
  return (
    <LockedLayout>
      <Home />
    </LockedLayout>
  );
};

export default HomeView;
