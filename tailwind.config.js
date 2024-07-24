/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#094062',
        secondary: '#E7E8E9',
        bg: '#EFF2F3',
        text: '#00BCD4',
        white: '#FFFFFF',
        teal: '#008080',
        darkBlue: '#0b7dda',
      },
      color: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      screens: {
        mobile: { max: '360px' },
        // => @media (max-width: 360px) { ... }

        mobile450: { max: '450px' },
        // => @media (max-width: 450px) { ... }

        mobile480: { max: '480px' },
        // => @media (max-width: 480px) { ... }

        mobile530: { max: '530px' },
        // => @media (max-width: 530px) { ... }

        mobile550: { max: '550px' },
        // => @media (max-width: 550px) { ... }

        mobile580: { max: '580px' },
        // => @media (max-width: 580px) { ... }

        mobil640: { max: '640px' },
        // => @media (max-width: 640px) { ... }

        mobil670: { max: '670px' },
        // => @media (max-width: 670px) { ... }

        mobil675: { max: '675px' },
        // => @media (max-width: 670px) { ... }

        mobil680: { max: '680px' },
        // => @media (max-width: 680px) { ... }

        mobile730: { max: '730px' },
        // => @media (max-width: 730px) { ... }

        mobile768: { max: '768px' },
        // => @media (max-width: 768px) { ... }

        table845: { max: '845px' },
        // => @media (max-width: 845px) { ... }

        table900: { max: '900px' },
        // => @media (max-width: 900px) { ... }

        table920: { max: '920px' },
        // => @media (max-width: 920px) { ... }

        table950: { max: '950px' },
        // => @media (max-width: 950px) { ... }

        table1005: { max: '1005px' },
        // => @media (max-width: 1005px) { ... }

        table: { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        table1080: { max: '1080px' },
        // => @media (max-width: 1080px) { ... }

        table1170: { max: '1170px' },
        // => @media (max-width: 1170px) { ... }

        desktop1220: { max: '1220px' },
        // => @media (max-width: 1220px) { ... }

        desktop: { max: '1280px' },
        // => @media (max-width: 1280px) { ... }

        desktop1350: { max: '1350px' },
        // => @media (max-width: 1350px) { ... }

        desktop1370: { max: '1370px' },
        // => @media (max-width: 1370px) { ... }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
