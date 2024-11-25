/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  
  content: ['./src/**/*.{js,html}'],  
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('./assets/search.png')" 
      },
      backgroundSize: {
        'width': "7%"  
      },
      backgroundPosition: {
        'position': '10px 10px', 
      },
      margin: {
        'marginleft': "1050px", 
        'marginbottom': '2000px', 
        'left': '450px',        
        'left': '950px',        
      },
      backgroundColor: {
        'DarkModeBackground': "hsl(207, 26%, 17%)", 
        'DarkModeElements': 'hsl(209, 23%, 22%)'   
      },
      colors: { 
        'light': "hsl(0, 0%, 100%)" 
      }
       },
  },

  plugins: [],
}
