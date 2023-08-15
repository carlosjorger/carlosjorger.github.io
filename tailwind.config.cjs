/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    keyframes:{
      'show-presentation':{
          '0%': {
            opacity: 0,
            transform: 'translate(0px, -10px)'
          }
      },
    },
    animation:{
      'presentation-title':'500ms show-presentation ease',
      'presentation-main-skill':'500ms ease 200ms forwards show-presentation',
      'presentation-description':'500ms ease 400ms forwards show-presentation'
    }
  },
  plugins: [],
};
