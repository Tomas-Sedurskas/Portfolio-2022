import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error404 } from "views";
import { Layout } from "containers/Layout";
import { WorkExperience } from "views/WorkExperience";
import { Education } from "views/Education";
import { SkillSet } from "views/SkillSet";
import { AboutMe } from "views/AboutMe";
import "styles/index.scss";

function App() {
  return (
    <div className="app" data-theme="dark">
      <Router>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Home />} />
            <Route element={<WorkExperience />} path="/work-experience" />
            <Route element={<Education />} path="/education" />
            <Route element={<SkillSet />} path="/skill-set" />
            <Route element={<AboutMe />} path="/about-me" />
            <Route element={<Error404 />} path="*" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
