/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-mode': "radial-gradient(125% 125% at 50% 10%, #FAF9F6 40%, #63e 100%)",
        'dark-mode': "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
