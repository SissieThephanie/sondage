import { Container } from "postcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      contenaire : {
        center : true ,
        padding : {
          default : '1rem',
          sm:'2rem',
          lg:'4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}