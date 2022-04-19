import React, { FC } from "react";
import WorkExperienceComponent from "./WorkExperience.component";
import { WORK_EXPERIENCE_CONTENT } from "content/work_experience";

const WorkExperience: FC = () => {
  return <WorkExperienceComponent works={WORK_EXPERIENCE_CONTENT} />;
};

export default WorkExperience;
