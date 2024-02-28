module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "content/**/*.md",
  ],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1100px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "799px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "599px" },
      xss: { max: "386px" },
      "xss-m": { min: "386px" },
      "xs-m": { min: "599px" },
      "sm-m": { min: "639px" },
      "md-m": { min: "799px" },
      "lg-m": { min: "1100px" },
      "xl-m": { min: "1279px" },
      "2xl-m": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      // => @media (min-width: 1279px) { ... }

      // => @media (min-width: 1023px) { ... }

      // => @media (min-width: 767px) { ... }

      // => @media (min-width: 639px) { ... }
    },
    colors: {
      black: "#00010D",
      black2: "#A2A2A6",
      white: "#f6f6f6",
      green: "#5aaf98",
      green2: "#1f6853",
      gray: "#adadad",
      blue: "#02021e",
      yellow: {
        200: "#FEF08A",
        400: "#facc15",
        600: "#ca8a04",
      },
      red: {
        200: "#fecaca",
        400: "#f87171",
        600: "#dc2626",
      },
    },

    fontSize: {
      xs_m: "0.625rem",
      sm_m: "1rem",
      base_m: "1.5rem",
      lg_m: "1.563rem",
      xl_m: "2.188rem",
      xl2_m: "2.813rem",
      xl3_m: "3.75rem",
      xl4_m: "6.563rem",
      xs_t: "0.875rem",
      sm_t: "0.938rem",
      base_t: "1.25rem",
      lg_t: "1.563rem",
      xl_t: "1.875rem",
      xl2_t: "2.375rem",
      xl3_t: "3.438rem",
      xl4_t: "5.125rem",
      xl5_t: "5.313rem",
      xl6_t: "9.375rem",
      xs_d: "0.938rem",
      sm_d: "1.125rem",
      base_d: "1.563rem",
      lg_d: "1.75rem",
      xl_d: "2.188rem",
      xl2_d: "3.125rem",
      xl3_d: "4.188rem",
      xl4_d: "5.313rem",
      xl5_d: "5.625rem",
      xl6_d: "15.625rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1100px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "799px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "599px" },
        xss: { max: "386px" },
        "xss-m": { min: "386px" },
        "xs-m": { min: "599px" },
        "sm-m": { min: "639px" },
        "md-m": { min: "799px" },
        "lg-m": { min: "1100px" },
        "xl-m": { min: "1279px" },
        "2xl-m": { min: "1535px" },
        // => @media (min-width: 1535px) { ... }

        // => @media (min-width: 1279px) { ... }

        // => @media (min-width: 1023px) { ... }

        // => @media (min-width: 767px) { ... }

        // => @media (min-width: 639px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
