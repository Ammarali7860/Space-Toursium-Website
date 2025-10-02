/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteCustom: "#FFFFFF",
        lightBlue: "#D0D6F9",
        darkBlue: "#0B0D17",
      },
    },
  },
  plugins: [],
}
