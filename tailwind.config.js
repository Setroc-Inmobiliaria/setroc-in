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
    },
  },
  plugins: [
    require("@tailwindcss/custom-forms"), 
  ],
};
