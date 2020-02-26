const IS = {
  ERROR: 2,
  OFF: 0,
  WARN: 1,
};

/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@cybozu/eslint-config/presets/react-typescript-prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "sort-keys-fix"],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      IS.OFF,
      { components: ["a"], specialLink: ["to"] },
    ],
    "new-cap": IS.OFF,
    "sort-keys-fix/sort-keys-fix": IS.ERROR,
  },
};
module.exports = config;
