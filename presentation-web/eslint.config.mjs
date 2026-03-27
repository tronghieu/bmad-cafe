import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Slide content uses quotes intentionally — escaping would hurt readability
      "react/no-unescaped-entities": "off",
      // Math.random in animation props is intentional (handled in useMemo)
      "react-hooks/purity": "off",
    },
  },
]);

export default eslintConfig;

