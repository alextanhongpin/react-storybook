import React from "react";
import { ThemeProvider } from "styled-components";

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme;
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  // Sort the components alphabetically.
  options: {
    storySort: {
      //method: "alphabetical",
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};
