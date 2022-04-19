import React, { FC, ReactNode } from "react";

import "./ContentLayout.scss";

const ContentLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const className = "content-layout";

  return <div className={className}>{children}</div>;
};

export default ContentLayout;
