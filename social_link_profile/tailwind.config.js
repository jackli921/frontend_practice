/** @type {import('tailwindcss').Config} */

module.exports = {
content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "hsl(75, 94%, 57%)",
        "custom-white": "hsl(0, 0%, 100%)",
        grey: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
