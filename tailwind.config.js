module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "hsl(204, 13.5%, 56.9%)",
          500: "hsl(208.9, 35.1%, 15.1%)",
          600: "hsl(205.7, 15.8%, 26.1%)",
          900: "hsl(210, 27.5%, 20%)",
        },
        body: {
          default: "hsl(210,34.3%,12.5%)",
        },
        primary: {
          default: "hsl(202.8,89.1%,53.1%)",
          600: "hsl(206,87,28)",
        },
      },
      borderRadius: {
        xl: "0.8rem",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "focus", "group-hover"],
    textColor: ["hover", "focus", "group-hover"],
  },
  plugins: [],
};
