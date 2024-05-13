/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xxs: "240px",
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
      'smSP': {'min': '240px', 'max': '767px'},
      // => @media (min-width: 240px and max-width: 767px) { ... }

      'mdSP': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lgSP': {'min': '1024px', 'max': '12000px'},
      // => @media (min-width: 1024px and max-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1C6570",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        qoqu_Night_Blue: "#224C86",
        qoqu_Blue: "#3E64FF",
        qoqu_Light_Green: "#4fff4c",
        qoqu_Dark_Green: "#014800",
        qoqu_Red: "#ED1D24",
        qoqu_Orange: "#f8452d",
        qoqu_Light_Orange: "#FF691D",
        qoqu_Dark_Grey: "#373d4c",
        qoqu_Grey: "#C2C5CC",
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        brand_original_main: "#1C6570",
        brand_original_main2: "#0c432b",
        brand_original_main3: "#2fd78e",
        orange: "#FF964B",
        brand_original_secondary: "#FF7C29",
      },
      backgroundImage: {
        banner: "url('/hero-banner.webp')",
      },      
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    ],
    daisyui: {
    themes: ["light", "dark", "cupcake"],
    },
};

