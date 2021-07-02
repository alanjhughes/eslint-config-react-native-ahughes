module.exports = {
  "plugins": ["import"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "@react-native-community",
    "plugin:import/typescript",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "import/no-extraneous-dependencies": 2,
    "import/extensions": ["error", "never", { "svg": "always" }],
    "import/order": 0,
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
    "@typescript-eslint/indent": 0,
    "import/no-anonymous-default-export": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": [
      "error",
      { "additionalHooks": "(useMemoOne)" }
    ],
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,
    "camelcase": 2,
    "prefer-destructuring": 2,
    "no-console": 1
  }
}
