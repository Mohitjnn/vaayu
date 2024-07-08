/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(4,108,154,1) 0%, rgba(154,196,215,1) 60%, rgba(255,255,255,1) 100%)",
      },
      colors: {
        navSolid: "#AEAEARC",
      },
    },
  },
  plugins: [],
};
