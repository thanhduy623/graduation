/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        navy: {
          950: 'var(--color-navy-950)',
          900: 'var(--color-navy-900)',
          850: 'var(--color-navy-850)',
          800: 'var(--color-navy-800)',
          700: 'var(--color-navy-700)',
          DEFAULT: 'var(--color-navy-800)',
        },

        slate: {
          50: 'var(--color-slate-50)',
          100: 'var(--color-slate-100)',
          200: 'var(--color-slate-200)',
          300: 'var(--color-slate-300)',
          400: 'var(--color-slate-400)',
          500: 'var(--color-slate-500)',
          600: 'var(--color-slate-600)',
          700: 'var(--color-slate-700)',
          800: 'var(--color-slate-800)',
          900: 'var(--color-slate-900)',
        },

        gold: {
          100: 'var(--color-gold-100)',
          200: 'var(--color-gold-200)',
          300: 'var(--color-gold-300)',
          400: 'var(--color-gold-400)',
          500: 'var(--color-gold-500)',
          600: 'var(--color-gold-600)',
          700: 'var(--color-gold-700)',
          800: 'var(--color-gold-800)',

          metallic: 'var(--color-gold-100)',
          light: 'var(--color-gold-light)',
          muted: 'var(--color-gold-muted)',
        },
      },

      fontFamily: {
        sans: ['var(--font-sans)'],

        serif: ['var(--font-serif)'],

        script: ['var(--font-script)'],
      },

      backgroundImage: {
        'gold-gradient': 'var(--gradient-gold)',
        'gold-metallic': 'var(--gradient-gold-metallic)',
        'navy-gradient': 'var(--gradient-navy)',
      },

      boxShadow: {
        soft: 'var(--shadow-soft)',
        deep: 'var(--shadow-deep)',
        gold: 'var(--shadow-gold)',
      },

      borderRadius: {
        'invitation-sm': 'var(--radius-sm)',
        'invitation-md': 'var(--radius-md)',
        'invitation-lg': 'var(--radius-lg)',
        'invitation-xl': 'var(--radius-xl)',
        'invitation-2xl': 'var(--radius-2xl)',
      },

      transitionTimingFunction: {
        cinematic: 'var(--ease-smooth)',
        expo: 'var(--ease-out-expo)',
        smooth: 'var(--ease-out-quart)',
      },

      transitionDuration: {
        cinematic: 'var(--duration-cinematic)',
      },

      minHeight: {
        screen: '100svh',
      },

      height: {
        screen: '100svh',
      },
    },
  },

  plugins: [],
}
