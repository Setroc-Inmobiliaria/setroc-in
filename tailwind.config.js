/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}", // Agrega cualquier directorio adicional que contenga archivos que quieres procesar con Tailwind
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '967px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'afacad': ['Afacad', 'sans-serif'],
      },
      colors: {
        p1: '#91D1C5',
        p2: '#42838A',
        p3: '#276296',
        p4: '#67ADD4',
        p5: '#B2D3E7',
        p6: '#D9DFEC'
      }
    },
  },
  plugins: [
    require("@tailwindcss/custom-forms"), 
  ],
};
