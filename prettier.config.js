/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Basic formatting preferences
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,

  // JSX specific formatting
  jsxSingleQuote: false,
  bracketSameLine: false,

  // Arrow function formatting
  arrowParens: "always",

  // Next.js optimization for imports

  // Plugins
  plugins: ["prettier-plugin-tailwindcss"],

  // Tailwind specifics
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn", "cva"],
};
