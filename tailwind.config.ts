import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Nunito Sans',
          'Nunito Sans Fallback',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;