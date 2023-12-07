// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}", // Agrega cualquier directorio adicional que contenga archivos que quieres procesar con Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/custom-forms"), 
  ],
};
