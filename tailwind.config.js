/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-banner': 'url(\'/src/assets/image/home-banner.png\')',
      },
      fontFamily: {
          'serif': ['ui-serif', 'Georgia'],

      }
    },
  },
  daisyui:{
    themes:[
      {
        defaultTheme:{
                    'primary':'#03989e',
                    'secondary':'#373a42',
                    'accent':'#ff3d71',
                    'neutral':'#c1c5d0',
                    'info':'#F4F7FF',
                    'success':'#3366FF',
                    'error':'#ff0000',
                    'snow': '#ffffff'
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}

