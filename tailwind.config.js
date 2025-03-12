/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
    theme: {
      extend: {
        colors: {
          primary: "#F6A64F", 
          secondary: "#9333EA", 
          background: "#FFFCF8", 
          white: "#FBFBFB", 
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
        },
      },
    },
    plugins: [],
  };
  