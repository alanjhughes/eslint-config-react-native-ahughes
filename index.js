module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-native/all",
<<<<<<< HEAD
    "plugin:prettier/recommended",
||||||| parent of d29b7cd (bump deps)
    "prettier"
=======
    "prettier",
>>>>>>> d29b7cd (bump deps)
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ["import"],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 0,
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "import/no-cycle": 0,
    "import/prefer-default-export": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "import/no-unused-modules": 0,
    "import/no-deprecated": 0,
    "react-native/no-color-literals": 0,
<<<<<<< HEAD
    "react-native/no-inline-styles": 0,
    "react-native/no-raw-text": 0,
    "react-native/sort-styles": 0,
    "comma-dangle": 0,
    "multiline-ternary": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-use-before-define": "off",
    "react-hooks/rules-of-hooks": 2,
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": "off",
    "no-console": "warn",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
||||||| parent of d29b7cd (bump deps)
    "no-console": 1
=======
    "react-native/no-inline-styles": 0,
    "no-console": 1,
>>>>>>> d29b7cd (bump deps)
  },
};
