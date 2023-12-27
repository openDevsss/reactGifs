const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-var": "error",
    "prefer-const": "error",
    "no-console": "warn",
    eqeqeq: "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "no-eval": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unsafe-finally": "error",
    "valid-jsdoc": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/require-ts-comment-description": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  env: {
    node: true,
  },
};

module.exports = config;
