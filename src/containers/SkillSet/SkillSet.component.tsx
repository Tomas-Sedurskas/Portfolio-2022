import React, { FC } from "react";

import { LogoIconList } from "components/LogoIconList";

import { SkillSetProps } from "./SkillSet.types";

import "./SkillSet.scss";
import { Button } from "components/Button";

const SkillSet: FC<SkillSetProps> = ({ skillLogos }) => {
  const className = "skill-set";

  return (
    <div className={className}>
      <div className={`${className}_row`}>
        <div className={`${className}_main`}>
          <h2>Skill set</h2>
          <ul className={`${className}_list`}>
            <li>
              Experienced with React, JavaScript, TypeScript, Redux, SASS,
              Node.js, Jest and more.
            </li>
            <li>
              Concentrated on writing structured, scalable, maintainable and
              unit tested code.
            </li>
            <li>
              Focused on delivering fully functional features to production.
            </li>
            <li>I am a big fan of the feature based git flow.</li>
            <li>Skillful with Figma, Adobe XD, Photoshop and Illustrator</li>
          </ul>

          <h2>Fututre Roadmap</h2>
          <p>
            Currently, I am excited to learn GraphQL, Apollo, Svelte and Vite.
          </p>
          <p>
            In the long term i am interested in looking into Mobile development
            and more graphically advanced technologies like AR, VR and 3D
            graphics for the web.
          </p>
        </div>
        <LogoIconList icons={skillLogos} />
      </div>
      <div className={`${className}_extra`}>
        <h2>Extra projects</h2>
        <p>
          During my spare time I have a two projects that I like working on.
          <br></br>
          Here are links for the GitHub repositories.
        </p>
        <Button
          url="https://github.com/Tomas-Sedurskas/Web-Dev-Showcase"
          label="Web Development Showcase"
          linkType="external"
        />
        <Button
          url="https://github.com/Tomas-Sedurskas/Web-Nations"
          label="Web Nations"
          linkType="external"
        />
      </div>
    </div>
  );
};

export default SkillSet;
