/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveX: {
          from: { left: 200 },
          to: { left: 1200 }
        },
        moveY: {
          from: { top: 100 },
          to: { top: 600 }
        }
      },
      animation: {
        'run': 'moveX 6s linear 0s infinite alternate, moveY 8s linear 0s infinite alternate',
        'runFast' : 'moveX 2s linear 0s infinite alternate, moveY 3s linear 0s infinite alternate'
      }
    },
  },
  plugins: [],
};
