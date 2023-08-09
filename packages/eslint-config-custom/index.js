 /** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "turbo", 
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
  ], 
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
