import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        history: "readonly",
        URLSearchParams: "readonly",
        Intl: "readonly",
        Event: "readonly",
        setTimeout: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": ["error", "always"],
      "no-var": "warn",
      "prefer-const": "warn",
      "no-duplicate-case": "error",
      "no-empty": "warn",
      "no-extra-semi": "error",
      "no-unreachable": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    ignores: ["node_modules/**", "*.config.mjs"]
  }
);
