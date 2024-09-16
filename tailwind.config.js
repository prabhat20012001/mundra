/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend the animation utilities
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite', // Animation for background gradient
        'fall': 'fall 3s infinite ease-in', // Confetti falling animation
        'bounce': 'bounce 2s infinite', // Bounce effect
        'pulse': 'pulse 2s infinite', // Pulse effect (already included by default in Tailwind)
      },
      keyframes: {
        // Keyframes for background gradient animation
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // Keyframes for confetti falling animation
        'fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        // Bounce animation keyframes
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Extend the background gradient utilities
      backgroundSize: {
        '200%': '200% 200%', // For smooth gradient transitions
      },
      backgroundPosition: {
        '0-100': '0% 50%, 100% 50%', // Background gradient shifting positions
      },
    },
  },
  plugins: [],
};
