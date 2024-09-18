/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      '2xl': "2.4rem",
      '3xl': "2.6rem",
      '4xl': "3.2rem",
      '5xl': '4rem',
      '6xl': ['4.4rem', 1],
      '7xl': ['4.8rem', 1],
      "8xl": ["8rem", 1.1],
    },
    colors: {
      "transparent": "transparent",
      white: "#fff",
      "transparent-white": "#ffffff14",
      "off-white": "#f7f8f8",
      background: "#000212",
      grey: "#858699",
      "grey-dark": "#222326",
      "primary-text": "#b4bcd0"
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      "navigation-height": "var(--navigation-height)",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
      "page-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, #7877c64d, #00000000)",
      "hero-gradient": "radial-gradient(ellipse 50% 80% at 20% 40%, #5d34dd1a, #00000000), radial-gradient(ellipse 50% 80% at 80% 50%, #7877c626, #00000000)",
      'hero-glow': "conic-gradient(from 230.29deg at 51.63% 52.16%, #2400ff 0deg, #0087ff 67.5deg, #6c279d 198.75deg, #1826a3 251.25deg, #3667c4 301.88deg, #691eff 1turn)",
      "glow-lines": "linear-gradient(var(--direction), #9d9bf2 .43%, #7877c6 14.11%, #7877c600 62.95%)"
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0, transform: "translateY-[-10px]" },
        to: { opacity: 1, transform: 'none' }
      },
      'image-rotate': {
        '0%': { transform: "rotateX(25deg)" },
        '25%': { transform: "rotateX(25deg) scale(0.9)" },
        // '60%,100%':{transform:"none"}
        '60%': { transform: "none" },
        '100%': { transform: "none" }
      },
      "image-glow": {
        '0%': { opacity: 0, 'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)' },
        '10%': { opacity: 1, 'animation-timing-function': "cubic-bezier(0.12,0.01,0.08,0.99)" },
        '100%': { opacity: 0.2 }
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": 1 },
        "50%": { "stroke-dashoffset": 0 },
        "99%": { "stroke-dashoffset": 0 },
        "100%": { visibility: "hidden" }
      },
      'glow-line-horizontal': {
        "0%": { opacity: 0, transform: 'translateX(0)' },
        "5%": { opacity: 1, transform: 'translateX(0)' },
        "50%": { opacity: 1, },
        "100%": { opacity: 0, transform: 'translateX(45rem)' },
      },
      'glow-line-vertical': {
        "0%": { opacity: 0, transform: 'translateY(0)' },
        "5%": { opacity: 1, transform: 'translateY(0)' },
        "50%": { opacity: 1 },
        "100%": { opacity: 0, transform: 'translateY(45rem)' },
      }

    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay) ease forwards",
      'image-rotate': "image-rotate 1400ms ease forwards",
      'image-glow': "image-glow 4100ms 600ms ease-out forwards",
      'sketch-lines': "sketch-lines 1200ms ease-out forwards",
      "glow-line-horizontal": "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical": "glow-line-vertical var(--animation-duration) ease-in forwards"
    }
  },
  plugins: [],
};
