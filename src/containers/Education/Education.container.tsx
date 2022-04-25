import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { EDUCATION_PROJECTS_CONTENT } from "content/education";
import EducationComponent from "./Education.component";

import "./Education.scss";

const Education: FC = () => {
  const className = "home";
  const { id } = useParams();

  return (
    <EducationComponent project={EDUCATION_PROJECTS_CONTENT[Number(id)]} />
  );
};

export default Education;
