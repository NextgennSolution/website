/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #8750f7 0%, #8750f7 51%, #2a1454 100%)',
        'gradient2': 'linear-gradient(to right, #2a1454  0%, #8750f7 51%,#8750f7 100%)',
        'gradient3': 'linear-gradient(to right, #2a1454 100%, #8750f7 112%, #050709 100%)',
        'gradient4': 'linear-gradient(180deg, rgba(var(--bs-body-bg-rgb), 0.01), rgba(var(--bs-body-bg-rgb), 1) 85%),radial-gradient(ellipse at top left, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(var(--bd-accent-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(var(--bd-violet-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(var(--bd-pink-rgb), 0.5), transparent 50%)',


      },
      fontFamily: {
        sans: ['Poppins']
      },
      textColor: {
        'white-8c': '#ffffff8c',  // Define your custom text color here
      },
      
    },
  },
  plugins: [],
};
