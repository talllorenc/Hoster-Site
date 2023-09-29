

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'in': '576px',
      'md': '960px',
      'lg': '1315px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        source: ['Source Code Pro']
      },
    },
  },
  plugins: [],
}