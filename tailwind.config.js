// tailwind.config.js
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Indigo-600
        secondary: '#10B981',  // Emerald-500
        accent: '#F59E0B',     // Amber-500
        neutral: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        section: '4rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
            a: {
              color: theme('colors.primary'),
              '&:hover': { color: theme('colors.primary') },
            },
            h1: { color: theme('colors.neutral.900') },
            h2: { color: theme('colors.neutral.900') },
            strong: { color: theme('colors.neutral.900') },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.100'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': { color: theme('colors.secondary') },
            },
            h1: { color: theme('colors.neutral.100') },
            h2: { color: theme('colors.neutral.100') },
            strong: { color: theme('colors.neutral.100') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
