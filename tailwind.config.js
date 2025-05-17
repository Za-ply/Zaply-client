/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        creato800: ["var(--font-creato-800)", "sans-serif"],
        creato700: ["var(--font-creato-700)", "sans-serif"],
        creato500: ["var(--font-creato-500)", "sans-serif"],
        creato400: ["var(--font-creato-400)", "sans-serif"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "135%", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "135%", fontWeight: "700" }],
        h3: ["26px", { lineHeight: "135%", fontWeight: "700" }],
        t1: ["24px", { lineHeight: "135%", fontWeight: "600" }],
        t2: ["22px", { lineHeight: "135%", fontWeight: "600" }],
        t3: ["20px", { lineHeight: "135%", fontWeight: "600" }],
        t4: ["18px", { lineHeight: "135%", fontWeight: "600" }],
        b1M: ["18px", { lineHeight: "150%", fontWeight: "500" }],
        b1R: ["18px", { lineHeight: "150%", fontWeight: "400" }],
        b2M: ["16px", { lineHeight: "150%", fontWeight: "500" }],
        b2R: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        b3M: ["14px", { lineHeight: "150%", fontWeight: "500" }],
        b3R: ["14px", { lineHeight: "150%", fontWeight: "400" }],
        b4M: ["12px", { lineHeight: "150%", fontWeight: "500" }],
        b4R: ["12px", { lineHeight: "150%", fontWeight: "400" }],
        button1: ["18px", { lineHeight: "145%", fontWeight: "500" }],
        button2: ["16px", { lineHeight: "145%", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "145%", fontWeight: "400" }],
      },
      colors: {
        grayscale: {
          900: "#0F1114",
          800: "#363D47",
          700: "#5D6673",
          600: "#8D94A0",
          500: "#BDC5D0",
          400: "#D6DBE2",
          300: "#EAECF0",
          200: "#F6F7F9",
          100: "#FEFEFE",
        },
        blue: {
          blueblack: "#0A2838",
          900: "#147796",
          800: "#1B9FC8",
          700: "#22C7FA",
          500: "#93E6FF",
          300: "#D8F5FF",
          100: "#E9F9FF",
        },
        green: {
          900: "#0E694D",
          800: "#11AB7B",
          700: "#1FEAAB",
          500: "#84FBD6",
          300: "#CAFFEF",
          100: "#E9FDF7",
        },
        redscale: {
          700: "#F83650",
          500: "#FB7D8E",
          300: "#FFDBE0",
        },
        pink: {
          700: "#FFA5FF",
          500: "#FFDBFF",
          300: "#FFF1FF",
        },
        yellow: {
          500: "#FFF280",
          300: "#FFFCE6",
        },
        gradient: {
          "b700-g700": "#22C7FA",
          "v200-b700": "#1FE4A9",
        },
      },
      backgroundImage: {
        "b700-g700": "linear-gradient(98deg, #22C7FA 48.53%, #1FEAAB 70.88%)",
        "y300-b700": "linear-gradient(135deg, #FFFCE6 0%, #22C7FA 100%)",
        "b500-y300": "linear-gradient(180deg, #93E6FF 0%, #FEFEFE 49%, #FFFCE6 100%)",
        "b300-g100": "linear-gradient(180deg, #D8F5FF 0%, #FEFEFE 100%)",
        "gradation-btn":
          "linear-gradient(180deg, var(--main-blue-700-primary-grd, #22C7FA) 8.84%, var(--main-green-700-secondary, #1FEAAB) 98.01%)",
        "gradation-border":
          "linear-gradient(90deg, var(--main-green-500, #84FBD6) 0%, var(--main-blue-700-primary-grd, #22C7FA) 100%)",
        "gradation-text":
          "linear-gradient(272deg, var(--main-blue-700-primary-grd, #22C7FA) 70.08%, var(--main-green-700-secondary, #1FEAAB) 97.13%)",
        "background-default": "url('/assets/images/background_default.webp')",
        "backgroundLine-yellow": "url('/assets/images/background_yellow.webp')",
        "backgroundLine-green": "url('/assets/images/background_green.webp')",
        "backgroundLine-pink": "url('/assets/images/background_pink.webp')",
        "backgroundLine-white": "url('/assets/images/background_white.webp')",
      },
      keyframes: {
        "toast-pop-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "toast-pop-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-10%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-out-to-top": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-10%)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-out-to-bottom": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-10%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-to-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-10%)" },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" },
        },
        "zoom-out": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0.95)" },
        },
        in: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        out: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "border-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "toast-pop-in": "toast-pop-in 0.5s ease-out",
        "toast-pop-out": "toast-pop-out 0.3s ease-in",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-in",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-out-to-top": "slide-out-to-top 0.2s ease-in",
        "slide-in-from-bottom": "slide-in-from-bottom 0.4s ease-out",
        "slide-out-to-bottom": "slide-out-to-bottom 0.4s ease-in",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-out-to-left": "slide-out-to-left 0.2s ease-in",
        "zoom-in": "zoom-in 0.2s ease-out",
        "zoom-out": "zoom-out 0.2s ease-in",
        "border-rotate": "border-rotate 2s ease-in-out infinite",
        in: "in 0.2s ease-out",
        out: "out 0.2s ease-in",
      },
      boxShadow: {
        drop: "0px 0px 50px 0px rgba(152, 167, 172, 0.10)",
        box: "0px 0px 25px 0px rgba(177, 184, 195, 0.05)",
        cancel: "0px 0px 5px 0px rgba(114, 126, 144, 0.20)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
