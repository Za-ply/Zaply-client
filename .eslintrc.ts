import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: require("eslint-plugin-import"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      prettier: prettierPlugin,
    },
    rules: {
      semi: ["warn", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unused-state": "error",
      "array-callback-return": "off",
      "react/self-closing-comp": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
