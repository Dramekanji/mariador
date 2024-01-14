/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: {
          DEFAULT: "#a37d4c",
          hover: "#967142",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        room: 'url("../public/images/room.jpg")',
        about: 'url("../public/images/about.jpeg")',
        pool: 'url("../public/images/pool2.jpeg")',
        rooms: 'url("../public/images/rooms.jpeg")',
      },
    },
  },
  plugins: [],
};
