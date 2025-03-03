import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import pluginJs from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },

  ...compat.config({
    plugins: ["airbnb"],
    extends: "standard",
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      semi: "error",
    },
  }),
  pluginJs.configs.recommended,
];
