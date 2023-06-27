/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.zinc.100"),
            a: {
              color: theme("colors.blue.500"),
              textDecoration: "none",
              fontWeight: "normal",
              '&:hover': {
                textDecoration: "underline"
              }
            },
            code: {
              color: theme("colors.zinc.500"),
              fontWeight: "bold",
              fontSize: "0.95rem"
            },
          },
        },
        quoteless: {
          css: {
            ".prose :where(code):not(:where([class~='not-prose'] *))::before": {
              content: "none",
            },
            ".prose :where(code):not(:where([class~='not-prose'] *))::after": {
              content: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
