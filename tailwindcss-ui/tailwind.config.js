module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, //false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nlsred: "#ff0000",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      skew: {
        "-20": "-20deg",
      },
      transformOrigin: {
        0: "0px",
        "16-10": "16px 10px",
        "16-22": "16px 22px",
      },
      translate: {
        "7px": "7px",
        "5px": "5px",
        "-7px": "-7px",
        "-5px": "-5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
