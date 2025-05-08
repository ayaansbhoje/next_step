// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFC107', // You can adjust this to match the exact gold color from your logo
        },
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
}