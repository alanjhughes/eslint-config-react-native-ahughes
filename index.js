module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    "plugin:react-native/all",
    "prettier"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "react-native/sort-styles": 0,
    "react-native/no-color-literals": 0
  },
};
