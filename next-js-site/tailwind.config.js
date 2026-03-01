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
      typography: {
        ivy: {
          css: {
            '--tw-prose-body': '#5a667a',
            '--tw-prose-headings': '#2D5780',
            '--tw-prose-links': '#2D5780',
            '--tw-prose-links-hover': '#244568',
            '--tw-prose-bold': '#2D5780',
            '--tw-prose-counters': '#2D5780',
            '--tw-prose-bullets': '#2D5780',
            '--tw-prose-hr': '#d7dde6',
            '--tw-prose-quotes': '#2D5780',
            '--tw-prose-quote-borders': '#2D5780',
            '--tw-prose-captions': '#5a667a',
            '--tw-prose-code': '#2D5780',
            '--tw-prose-pre-code': '#f8fafc',
            '--tw-prose-pre-bg': '#0b1220',
            '--tw-prose-th-borders': '#d7dde6',
            '--tw-prose-td-borders': '#e5e7eb',
            a: {
              color: '#2D5780',
              textDecoration: 'underline',
              fontWeight: '600',
              transition: 'color 0.2s ease',
              '&:hover': { color: '#244568' },
              '&:focus-visible': {
                outline: '2px solid #2D5780',
                outlineOffset: '2px',
              },
            },
            strong: { color: '#2D5780' },
            h2: {
              position: 'relative',
              paddingLeft: '1rem',
              marginTop: '1.6rem',
              marginBottom: '0.9rem',
              borderLeft: '4px solid #2D5780',
              scrollMarginTop: '5rem',
            },
            h3: {
              position: 'relative',
              paddingLeft: '0.75rem',
              marginTop: '1.25rem',
              marginBottom: '0.6rem',
              borderLeft: '3px solid #d7dde6',
              scrollMarginTop: '5rem',
            },
            ul: { paddingLeft: '1.2rem' },
            ol: { paddingLeft: '1.2rem' },
            'ul > li': { marginTop: '0.35rem', marginBottom: '0.35rem' },
            'ol > li': { marginTop: '0.35rem', marginBottom: '0.35rem' },
            blockquote: {
              borderLeft: '4px solid #2D5780',
              backgroundColor: '#f5f7fb',
              padding: '0.9rem 1.25rem',
              fontStyle: 'normal',
              color: '#2D5780',
            },
            'blockquote p:first-of-type': { marginTop: '0' },
            'blockquote p:last-of-type': { marginBottom: '0' },
            code: {
              backgroundColor: '#f5f7fb',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.35rem',
              fontWeight: '600',
            },
            pre: {
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
            },
            table: {
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: 0,
            },
            th: {
              padding: '0.75rem',
              backgroundColor: '#f8fafc',
              color: '#2D5780',
              fontWeight: '700',
            },
            td: { padding: '0.65rem', color: '#5a667a' },
            'thead th': { borderBottom: '2px solid #d7dde6' },
            'tbody tr': { borderBottom: '1px solid #e5e7eb' },
            'tbody tr:nth-child(odd)': { backgroundColor: '#f8fafc' },
            img: {
              borderRadius: '0.75rem',
              boxShadow: '0 4px 16px rgba(15,23,42,0.08)',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            figure: { textAlign: 'center' },
            figcaption: {
              color: '#5a667a',
              fontSize: '0.95rem',
              marginTop: '0.5rem',
            },
            hr: { marginTop: '2rem', marginBottom: '2rem' },
            p: { marginTop: '0.9rem', marginBottom: '0.9rem' },
          },
        },
      },
      // backgroundImage: {
      //   'hero': "url('/images/banner/uDaptSSjK1.webp')",
      //   'about-hero': "url('/images/about-banner.webp')",
      //   'hourly-hero': "url('/images/hourly/hourlyconsultation.webp')",
      //   '5ezZg4xRm1-hero': "url('/images/home_section_images/5ezZg4xRm1.webp')",
      //   'testimonial-hero': "url('/images/testimonials_images/2f16iqi923ybhl1anjs.webp')",
      //   'success-hero': "url('/images/banner/success_aj39eiueorue.webp')",
      // },

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
        'marquee-tw': 'marquee-tw 8s linear infinite',
      },
      keyframes: {
        'marquee-tw': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
