module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "react-app/jest",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "import",
    "import-alias",
  ],
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
    "import/no-duplicates": ["error", { considerQueryString: true }],
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
        trailingComma: "all",
      },
    ],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/require-ts-comment-description": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import-alias/import-alias": [
      "error",
      {
        relativeDepth: 2,
        aliases: [
          { alias: "@components", matcher: "src/components" },
          { alias: "@constant", matcher: "src/constant" },
          { alias: "@context", matcher: "src/context" },
          { alias: "@features", matcher: "src/features" },
          { alias: "@hooks", matcher: "src/hooks" },
          { alias: "@images", matcher: "src/images" },
          { alias: "@layout", matcher: "src/layout" },
          { alias: "@pages", matcher: "src/pages" },
          { alias: "@types", matcher: "src/types" },
          { alias: "@utils", matcher: "src/utils" },
          { alias: "@vendor", matcher: "src/vendor" },
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {},
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
