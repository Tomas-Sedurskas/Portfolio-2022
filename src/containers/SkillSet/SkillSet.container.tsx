import React, { FC } from "react";
import SkillSetComponent from "./SkillSet.component";
import { SKILL_LOGOS } from "content/skillset";

const SkillSet: FC = () => {
  return <SkillSetComponent skillLogos={SKILL_LOGOS} />;
};

export default SkillSet;
