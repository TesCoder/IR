/** @type {import('tailwindcss').Config} */
module.exports = {
  // bootstrap conflict fix
  blocklist: ['collapse'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    'sm': '340px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  theme: {
    extend: {
      colors: {
        'ivy-blue': "#2D5780",
        'ivy-red': "#990001"
      },
      backgroundImage: {
        'hero': "url('/images/banner/uDaptSSjK1.webp')",
        'about-hero': "url('/images/about-banner.jpg')",
        'hourly-hero': "url('/images/hourly/hourlyconsultation.jpg')",

        '5ezZg4xRm1-hero': "url('/images/home_section_images/5ezZg4xRm1.jpg')",

        'testimonial-hero': "url('/images/testimonials_images/bkc_2f16iqi923ybhl1anjs.jpg')",

      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      fontFamily: {
        raleway: ["Raleway"]
      },
      animation: {
        marquee: 'marquee 8s linear infinite',
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
