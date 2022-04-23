import React, { FC } from "react";

import { ContentSection as ContentSectionProps } from "types/content.types";

import { LogoIconList } from "components/LogoIconList";
import { Button } from "components/Button";
import { Icon } from "components/Icon";

import "./ContentSection.scss";

const ContentSection: FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  technologies,
  experiences,
  url,
  img,
  shape,
  color,
}) => {
  const className = "content-section";

  return (
    <div className={className}>
      <div className={`${className}_column`}>
        <div>
          <div className={`${className}_title`}>
            <Icon name={shape} size="lg" color={color} />
            <h2>{title}</h2>
          </div>
          <h3 className={`${className}_subtitle`}>{subtitle}</h3>
        </div>
        <p className={`${className}_paragraph`}>{description}</p>
        <div className={`${className}_technologies`}>
          <h3 className={`${className}_subtitle`}>Used technologies:</h3>
          <LogoIconList icons={technologies} enableToolips={true} />
        </div>
        <div className={`${className}_experience`}>
          <h3 className={`${className}_subtitle`}>More details:</h3>
          <ul className={`${className}_experience-list`}>
            {experiences.map((experience) => {
              return <li>{experience}</li>;
            })}
          </ul>
        </div>
        <Button label={`Visit ${title}`} url={url} linkType="external" />
      </div>
      <div className={`${className}_column`}>
        <div className={`${className}_image`}>
          <img src={img} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
