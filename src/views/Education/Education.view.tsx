import Education from "containers/Education/Education.container";
import { ContentLayout } from "layouts/ContentLayout";
import React, { FC } from "react";

const EducationView: FC = () => {
  return (
    <ContentLayout>
      <Education />
    </ContentLayout>
  );
};

export default EducationView;
