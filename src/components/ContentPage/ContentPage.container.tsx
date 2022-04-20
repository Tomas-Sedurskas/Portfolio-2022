import React, { FC } from "react";

import { ContentPage as ContentPageProps } from "types/content.types";

const ContentPage: FC<ContentPageProps> = ({}) => {
  const className = "content-section";

  return <div className={className}></div>;
};

export default ContentPage;
