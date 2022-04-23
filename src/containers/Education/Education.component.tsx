import React, { FC } from "react";

import { EducationProps } from "./Education.types";

import "./Education.scss";
import { Icon } from "components/Icon";
import { Button } from "components/Button";
import { calcNextId, calcPreviousId } from "content/education";

const Education: FC<EducationProps> = ({
  project: { id, title, subtitle, description, color, shape, subsections },
}) => {
  const className = "education";

  return (
    <div className={className}>
      <div className={`${className}_row`}>
        <div className={`${className}_column`}>
          <div className={`${className}_title`}>
            <Icon name={shape} size="lg" color={color} />
            <h1>{title}</h1>
          </div>
          <h3 className={`${className}_subtitle`}>{subtitle}</h3>
          <p className={`${className}_paragraph`}>{description}</p>
        </div>
      </div>
      {subsections.map(({ img, title, description }, index) => {
        return (
          <div key={index} className={`${className}_wrapper`}>
            <div key={index} className={`${className}_row`}>
              <div className={`${className}_column`}>
                <h2 className={`${className}_secondary-title`}>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
            <img src={img} loading="lazy" />
          </div>
        );
      })}
      <div className={`${className}_footer`}>
        <Button
          linkType="internal"
          label="Previous project"
          url={`/education/${calcPreviousId(id)}`}
          reverse={true}
        />
        <Button
          linkType="internal"
          label="Next project"
          url={`/education/${calcNextId(id)}`}
        />
      </div>
    </div>
  );
};

export default Education;
