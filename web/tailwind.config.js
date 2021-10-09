/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(({ addUtilities }) => {
      const newResponsiveUtilities = {
        ".items-normal": {
          alignItems: "normal",
        },
      };

      addUtilities(newResponsiveUtilities, ["responsive"]);
    }),
  ],
};
