module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002244',
        secondary: '#f8fafc',
        tertiary: "#FB4F14",
        error: "red"
      },
      fontFamily: {
        titles: ['GlacialIndifference-Bold', 'sans-serif'],
        content: ['GlacialIndifference-Regular', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
