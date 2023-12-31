/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3d": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        muiCard: "0px 5px 15px rgba(58, 53, 65, 0.1)",
        li: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
      },
      backgroundColor: {
        rblack: "#04080F",
        gloucous: "#507DBC",
        pblue: "#A1C6EA",
        cblue: "#BBD1EA",
        platinum: "#DAE3E5",
      },
      backgroundImage: {
        activeNav: "linear-gradient(98deg, #C6A7FE, #9155FD 94%)",
      },
      width: {
        nav: "260px",
        main: "100%",
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
