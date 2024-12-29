/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { raw: "(min-width:320px) and (max-width:600px) "  },
        md: { raw: "(min-width: 600px) and (max-width: 1082px)" },
      }
    },
  },
  plugins: [],
  
}

