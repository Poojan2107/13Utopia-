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

    // Vendored reference material and local tool state — not app source.
    "web/**",
    "Awwwards_Master_Pack/**",
    "animmaster/**",
    ".kilo/**",
    ".kombai/**",
    ".cursor/**",
    ".freebuff/**",
    "_recovered_hero/**",

    // Build artifacts that ship in the tree:
    "tsconfig.tsbuildinfo",
  ]),
]);

export default eslintConfig;
