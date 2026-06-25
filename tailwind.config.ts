import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        roma: {
          burgundy: '#5A0606',
          'dark-red': '#A22727',
          'soft-beige': '#E7E3DE',
          white: '#F4F1EE',
          cream: '#F7F3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'Neue Haas Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'floating': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'luxury': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
export default config
