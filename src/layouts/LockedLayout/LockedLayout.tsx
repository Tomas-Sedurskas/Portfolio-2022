import React, { FC, ReactNode } from "react";

import "./LockedLayout.scss";

const LockedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const className = "locked-layout";

  return <div className={className}>{children}</div>;
};

export default LockedLayout;
