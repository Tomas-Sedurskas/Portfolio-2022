import React, { FC } from "react";

import { WorkExperienceProps } from "./WorkExperience.types";

import { ContentSection } from "components/ContentSection";

import "./WorkExperience.scss";

const WorkExperience: FC<WorkExperienceProps> = ({ works }) => {
  const className = "work-experience";

  return (
    <div className={className}>
      {works.map((work) => {
        return <ContentSection {...work} />;
      })}
    </div>
  );
};

export default WorkExperience;
