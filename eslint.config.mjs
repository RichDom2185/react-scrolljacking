// @ts-check
import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { settings: { react: { version: "detect" } } },
  react.configs.flat.recommended,
  {
    files: ["**/*.tsx"],
    rules: {
      "react/prop-types": "off",
      // With the new JSX Transform in React 17,
      // we don't need to import React in every file.
      "react/react-in-jsx-scope": "off",
    },
  }
);
