module.exports = {
  content: ["./src/**/*.{ts,tsx,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "#181818",
          light: "#383838",
        },
      },
    },
  },
  plugins: [
    require('postcss-nesting'),
  ],
};
