// eslint-config-next v16 ships native flat configs. Routing them through
// FlatCompat (the v15-era pattern) made ESLint throw
// "Converting circular structure to JSON" before it linted a single file.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
