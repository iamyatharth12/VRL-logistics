/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        label: ["'Barlow'", "sans-serif"],
      },
      colors: {
        /* Brand */
        vrl: {
          red:    "#C8102E",
          redDark:"#A00C24",
          navy:   "#0D1B2A",
          steel:  "#1E2D3D",
          ash:    "#2E3F50",
          slate:  "#64748B",
          mist:   "#94A3B8",
          bone:   "#F1F5F9",
          white:  "#FFFFFF",
          amber:  "#F59E0B",
          green:  "#16A34A",
        },
      },
      animation: {
        'dot-move': 'dotMove 4s linear infinite',
        'line-draw': 'lineDraw 1.5s ease-out forwards',
        'progress-fill': 'progressFill 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        dotMove: {
          '0%':   { offsetDistance: '0%', opacity: '0' },
          '5%':   { opacity: '1' },
          '95%':  { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        lineDraw: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        progressFill: {
          '0%':   { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
}
