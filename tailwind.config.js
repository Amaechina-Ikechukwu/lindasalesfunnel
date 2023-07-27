/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
     './style/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  //     colors: {
  //     'accent': "#3A0030",
  // 'accentLight': "#813470",
  // 'text': "#525252",
  // 'first': "#ffffff",
  // 'second': "#cfd1cf",
  // 'backShade': "rgba(0,0,0,0.4)",
  // 'warning': "#e8d505",
  // 'blackk': "#000000",
  // 'success': "rgba(0, 173, 46,0.8)",
  // 'green': "#00BF86",
  
  // 'pinkk': "#DC00AB",
  // 'pinkBackShade': "rgba(220,0,171,0.25)",
  // 'lightash': "rgba(0,0,0,0.09)",
  // 'offwhite': "#f4f4f4",
  // 'pricePlanAccent': "#FEA501",
  // 'pricePlanSecondary': "#FFD600",
  // 'linda': "#FFA500",
  // 'greenBackShade': "rgba(0,191,134,0.25)",
    
  //   },
    extend: {

    },
  },
  plugins: [],
}