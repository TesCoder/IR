/** @type {import('tailwindcss').Config} */
module.exports = {
  // bootstrap conflict fix
  blocklist: ['collapse'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivy-blue': "#2d5780",
        'ivy-red': "#990000"
      },
      backgroundImage: {
        'hero': "url('/images/banner.jpg')",
        'about-hero': "url('/images/about-banner.jpg')",
      },
      fontFamily: {
        raleway: ["Raleway"]
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
