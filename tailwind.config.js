/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ["SVN-Amstirdam", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
        cafeta: ["UTM-Cafeta", "sans-serif"],
        ephesis: ["Ephesis", "sans-serif"],
        cormorant: ["CormorantUpright-SemiBold", "sans-serif"],
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
