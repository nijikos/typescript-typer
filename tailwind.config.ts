const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dasssrk"]'], // kalau mau darkmode lagi dibalikin jadi "dark" lagi
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    screens: {
      "3xl": { max: "1600px" },
      // => @media (max-width: 1600px) { ... }
      "2xl": { max: "1400px" },
      // => @media (max-width: 1400px) { ... }
      xl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      lg: { max: "992px" },
      // => @media (max-width: 992px) { ... }
      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }
      sm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          1: "#0084FF",
          "1-white": "#f5faff",
          "1-lightest": "#e5f3ff",
          "1-lighter": "#66b5ff",
          "1-light": "#339dff",
          "1-dark": "#006ACC",
          "1-darker": "#004db2",
          2: "#3FDD78",
          "2-white": "#f6fdf9",
          "2-lightest": "#e9fbf0",
          "2-lighter": "#97edb6",
          "2-light": "#6ce597",
          "2-dark": "#23c75e",
          "2-darker": "#1fb249",
        },
        accent: {
          1: "#D84C10",
          "1-white": "#fef8f6",
          "1-lightest": "#fdeee7",
          "1-lighter": "#f38759",
          "1-light": "#ef6529",
          "1-dark": "#a63a0c",
          "1-darker": "#8e270b",
          2: "#3E90F0",
          3: "#8E55EA",
          "3-white": "#f9f6fe",
          "3-lightest": "#F0E8FC",
          "3-lighter": "#ccb2f5",
          "3-light": "#ae84f0",
          "3-dark": "#712ae5",
          "3-darker": "#541bda",
          4: "#8C6584",
          5: "#DDA73F",
        },
        n: {
          1: "#fefefe",
          2: "#f3f5f7",
          3: "#e8ecef",
          4: "#b4b8bb",
          5: "#838789",
          6: "#2b2e30",
          7: "#141718",
        },
      },
      spacing: {
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.75rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        58: "14.5rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      fontFamily: {
        sans: ["var(--font-karla)", ...fontFamily.sans],
        inter: "var(--font-inter)",
      },
      fontSize: {
        0: ["0px", "0px"],
        xl: ["1.125rem", "2rem"],
        "2xl": ["1.5rem", "2.5rem"],
        "3xl": ["1.75rem", "2.5rem"],
        "4xl": ["2.5rem", "3rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["4rem", "4.5rem"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        3: "0.1875rem",
        6: "0.375rem",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        32: "32px",
        34: "34px",
        36: "36px",
        40: "40px",
        50: "50px",
        60: "60px",
      },
      opacity: {
        15: ".15",
      },
      keyframes: {
        loaderDots: {
          "0%": { opacity: 1 },
          "50%,100%": { opacity: 0.15 },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("tailwind-scrollbar"),
    iOSHeight,
    plugin(function ({ addBase, addComponents, addUtilities }: any) {
      addBase({
        html: {
          "@apply text-[1rem]": {},
        },
        body: {
          "@apply bg-n-7 text-[1rem] leading-6 -tracking-[.01em] text-n-7 antialiased md:bg-n-1 dark:text-n-1 dark:md:bg-n-6":
            {},
        },
        input: {
          "@apply focus:outline-none": {},
        },
      });
      addComponents({
        ".bound": {
          "@apply border border-dashed border-red-500": {},
        },
        ".bound-blue": {
          "@apply border border-dashed border-sky-500": {},
        },
        ".bound-green": {
          "@apply border border-dashed border-emerald-500": {},
        },
        ".bound-pink": {
          "@apply border border-dashed border-pink-400": {},
        },
        ".bound-orange": {
          "@apply border border-dashed border-orange-400": {},
        },
        ".bound-purple": {
          "@apply border border-dashed border-violet-200": {},
        },
        ".bound-yellow": {
          "@apply border-3 border-dashed border-yellow-200": {},
        },
        ".h1": {
          "@apply font-inter text-6xl font-bold -tracking-[.025em]": {},
        },
        ".h2": {
          "@apply font-inter text-5xl font-bold -tracking-[.025em]": {},
        },
        ".h3": {
          "@apply font-inter text-4xl font-bold -tracking-[.045em]": {},
        },
        ".h4": {
          "@apply font-inter text-3xl font-bold -tracking-[.02em]": {},
        },
        ".h5": {
          "@apply font-inter text-2xl font-semibold -tracking-[.03em]": {},
        },
        ".h6": {
          "@apply font-inter text-xl font-semibold -tracking-[.03em]": {},
        },
        ".body1": {
          "@apply text-[1.5rem] leading-9 -tracking-[.03em]": {},
        },
        ".body1S": {
          "@apply text-[1.375rem] leading-7 -tracking-[.02em]": {},
        },
        ".body2": {
          "@apply text-[1.0625rem] leading-6 -tracking-[.01em]": {},
        },
        ".base1": {
          "@apply font-inter text-[1rem] leading-6 font-medium -tracking-[.03em]":
            {},
        },
        ".base2": {
          "@apply font-inter text-[0.875rem] leading-6 font-medium -tracking-[.02em]":
            {},
        },
        ".caption1": {
          "@apply font-inter text-[0.75rem] leading-5 font-medium -tracking-[.01em]":
            {},
        },
        ".caption2": {
          "@apply font-inter text-[0.6875rem] leading-4 font-medium -tracking-[.01em]":
            {},
        },
        ".btn": {
          "@apply inline-flex items-center justify-center h-12 px-5.5 border-2 rounded-xl base2 font-semibold transition-colors disabled:opacity-20 disabled:pointer-events-none":
            {},
        },
        ".btn svg": {
          "@apply fill-inherit first:mr-2 last:ml-2": {},
        },
        ".btn-blue": {
          "@apply btn bg-primary-1 border-primary-1 text-n-1 fill-n-1 hover:bg-primary-1/90 hover:border-transparent":
            {},
        },
        ".btn-red": {
          "@apply btn bg-accent-1 border-accent-1 text-n-1 fill-n-1 hover:bg-accent-1/90 hover:border-transparent":
            {},
        },
        ".btn-dark": {
          "@apply btn bg-n-7 border-n-7 text-n-1 fill-n-1 hover:bg-n-5 hover:border-n-5 dark:bg-n-1 dark:border-n-1 dark:text-n-7 dark:fill-n-7 dark:hover:border-transparent dark:hover:text-primary-1 dark:hover:fill-primary-1":
            {},
        },
        ".btn-white": {
          "@apply btn bg-n-1 border-transparent shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)] text-n-7 fill-n-7 hover:bg-n-2 dark:bg-n-6 dark:border-n-1/10 dark:text-n-1 dark:fill-n-1 dark:hover:bg-n-1/10":
            {},
        },
        ".btn-stroke-dark": {
          "@apply btn border-n-5 text-n-1 hover:bg-n-5": {},
        },
        ".btn-stroke-light": {
          "@apply btn border-n-3 fill-n-7 hover:bg-n-3 hover:text-n-7 dark:border-n-5 dark:hover:bg-n-5 dark:hover:text-n-1 dark:fill-n-1":
            {},
        },
        ".btn-large": {
          "@apply h-13": {},
        },
        ".btn-medium": {
          "@apply h-10": {},
        },
        ".btn-small": {
          "@apply h-9 px-4 border rounded-md": {},
        },
        ".btn-medium svg, .btn-small svg": {
          "@apply w-5 h-5": {},
        },
        ".btn-primary-1-contain": {
          "@apply bg-primary-1 hover:bg-primary-1-dark text-n-1 px-4 py-2 rounded-lg flex flex-row justify-center gap-4 items-center transition":
            {},
        },
        ".btn-primary-1-outlined": {
          "@apply border border-solid border-primary-1 hover:bg-primary-1-white text-primary-1 px-4 py-2 rounded-lg flex flex-row justify-center gap-4 items-center transition":
            {},
        },
        ".btn-accent-1-contain": {
          "@apply bg-accent-1 hover:bg-accent-1-dark text-n-1 px-4 py-2 rounded-lg flex flex-row justify-center gap-4 items-center transition":
            {},
        },
        ".btn-accent-1-outlined": {
          "@apply border border-solid border-accent-1 hover:bg-accent-1-white text-accent-1 px-4 py-2 rounded-lg flex flex-row justify-center gap-4 items-center transition":
            {},
        },
        ".card": {
          "@apply bg-n-1 px-6 py-4 rounded-lg": {},
        },
        ".card-p-0": {
          "@apply bg-n-1 rounded-lg": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
