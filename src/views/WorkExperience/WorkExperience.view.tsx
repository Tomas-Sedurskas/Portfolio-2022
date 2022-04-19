import React, { FC } from "react";

import { ContentLayout } from "layouts/ContentLayout";
import { WorkExperience } from "containers/WorkExperience";

const WorkExperienceView: FC = () => {
  return (
    <ContentLayout>
      <WorkExperience />
    </ContentLayout>
  );
};

export default WorkExperienceView;
