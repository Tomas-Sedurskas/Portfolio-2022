import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WorkExperienceView } from "views/WorkExperience";
import { BaseLayout } from "layouts/BaseLayout";
import { EducationView } from "views/Education";
import { SkillSetView } from "views/SkillSet";
import { AboutMeView } from "views/AboutMe";
import { HomeView, Error404View } from "views";

import "styles/index.scss";

function App() {
  return (
    <div className="app" data-theme="dark">
      <Router>
        <Routes>
          <Route element={<BaseLayout />} path="/">
            <Route index element={<HomeView />} />
            <Route element={<WorkExperienceView />} path="/work-experience" />
            <Route element={<EducationView />} path="/education" />
            <Route element={<SkillSetView />} path="/skill-set" />
            <Route element={<AboutMeView />} path="/about-me" />
            <Route element={<Error404View />} path="*" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
