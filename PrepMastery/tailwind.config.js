/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        "yello": "#FDF8EE",
      },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#4D2C5E",
          secondary: "#FF7426",
          accent: "indigo",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

