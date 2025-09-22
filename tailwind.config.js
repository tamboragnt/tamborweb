/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Dynamic gradient classes used in IntakeModal
    'from-tambor-red',
    'to-tambor-red-light',
    'from-tambor-blue',
    'to-tambor-blue-light',
    'from-tambor-blue-dark',
    'to-tambor-blue-dark',
    'from-tambor-navy',
    'to-tambor-blue',
    // Dynamic background and text color classes
    'bg-tambor-red/10',
    'text-tambor-red',
    'bg-tambor-blue/10',
    'text-tambor-blue',
    'bg-tambor-blue-dark/10',
    'text-tambor-blue-dark',
    'bg-tambor-navy/10',
    'text-tambor-navy',
    // Border colors
    'border-tambor-red/20',
    'border-tambor-blue/20',
    'border-tambor-blue-dark/20',
    'border-tambor-navy/20',
    // Hover states
    'hover:border-tambor-red/20',
    'hover:border-tambor-blue/20',
    'hover:border-tambor-blue-dark/20',
    'hover:border-tambor-navy/20',
    'hover:text-tambor-red',
    'hover:text-tambor-blue',
    'hover:text-tambor-blue-dark',
    'hover:text-tambor-navy'
  ],
  theme: {
    extend: {
      colors: {
        'tambor-red': '#FF3600',
        'tambor-blue': '#273B94',
        'tambor-navy': '#060E2E',
        'tambor-red-light': '#FF5722',
        'tambor-red-dark': '#E53E00',
        'tambor-blue-light': '#3F51B5',
        'tambor-blue-dark': '#1A237E',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};