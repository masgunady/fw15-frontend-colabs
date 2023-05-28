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
        'article-banner': 'url(\'/src/assets/image/article-banner.png\')',
        'category-banner': 'url(\'/src/assets/image/category-banner.png\')',
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
                    'neutral':'#025464',
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
    require('tailwind-scrollbar-hide')
  ],
}

