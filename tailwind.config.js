module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xm': '390px',
      'f4': '540px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'pc': '768px',
      //'md': '768px',
      'mf': '860px',
      'mx': '890px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}