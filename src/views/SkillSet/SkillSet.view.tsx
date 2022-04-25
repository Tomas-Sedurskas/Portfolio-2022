import React, { FC } from "react";

import { LockedLayout } from "layouts/LockedLayout";
import { SkillSet } from "containers/SkillSet";

const SkillSetView: FC = () => {
  return (
    <LockedLayout>
      <SkillSet />
    </LockedLayout>
  );
};

export default SkillSetView;
