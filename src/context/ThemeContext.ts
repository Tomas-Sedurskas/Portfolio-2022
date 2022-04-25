import React, { createContext } from "react";

interface ThemeContextInterface {
  isThemeDark: boolean;
  isSecretEnabled: boolean;
  toggleTheme?: () => void;
  toggleSecret: () => void;
}

const initState = {
  isThemeDark: false,
  isSecretEnabled: false,
  toggleSecret: () => {},
};

const ThemeContext = createContext<ThemeContextInterface>(initState);

export default ThemeContext;
