module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project:
      process.env.NODE_ENV === "production"
        ? "./tsconfig.json"
        : "./web/tsconfig.json", // "./web/tsconfig.json" in dev env
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  ignorePatterns: ["src/generated/graphql.ts"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: process.env.NODE_ENV === "production" ? "./" : "./web/" },
    ], // tricky but needed for the others package.json in project "./web/" in dev env
  },
};
