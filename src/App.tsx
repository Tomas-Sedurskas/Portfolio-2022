import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WorkExperienceView } from "views/WorkExperience";
import { BaseLayout } from "layouts/BaseLayout";
import { EducationView } from "views/Education";
import { SkillSetView } from "views/SkillSet";
import { HomeView, Error404View } from "views";
import ThemeContext from "context/ThemeContext";

import "styles/index.scss";

function App() {
  const localStorageTheme = () => {
    if (localStorage.getItem("portfolio-is-theme-dark") === "true") {
      return true;
    }
    return false;
  };

  const localStorageSecret = () => {
    if (localStorage.getItem("portfolio-secret_dark_mode") === "true") {
      return true;
    }
    return false;
  };

  const [isThemeDark, setIsThemeDark] = useState(localStorageTheme);
  const [isSecretEnabled, setIsSecretEnabled] = useState(localStorageSecret);

  const toggleTheme = () => {
    localStorage.setItem("portfolio-is-theme-dark", `${!isThemeDark}`);
    setIsThemeDark(!isThemeDark);
  };

  const toggleSecret = () => {
    localStorage.setItem("portfolio-secret_dark_mode", `${!isSecretEnabled}`);
    setIsSecretEnabled(!isSecretEnabled);
  };

  return (
    <ThemeContext.Provider
      value={{
        isThemeDark,
        isSecretEnabled,
        toggleTheme,
        toggleSecret,
      }}
    >
      <div className="app" data-theme={isThemeDark ? "dark" : "light"}>
        <Router>
          <Routes>
            <Route element={<BaseLayout />} path="/Portfolio-2022/">
              <Route index element={<HomeView />} />
              <Route
                element={<WorkExperienceView />}
                path="/Portfolio-2022/work-experience"
              />
              <Route
                element={<EducationView />}
                path="/Portfolio-2022/education/:id"
              />
              <Route
                element={<SkillSetView />}
                path="/Portfolio-2022/skill-set"
              />
              <Route element={<Error404View />} path="*" />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
