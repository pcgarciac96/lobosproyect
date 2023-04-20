module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme:{
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
  
      md: "768px",
      // => @media (min-width: 768px) { ... }
  
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
  
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
  
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    }, 
     borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
       'xl': '50%',
      'full': '9999rem',
      'large': '12px',
    },
   
  },
 

  
  plugins: [],
}