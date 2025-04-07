/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Dark mode
        bgDark: '#0F0F0F',
        textPrimary: '#E0E0E0',
        textMuted: '#A0A0A0',
        glowCyan: '#00FFE5',

        // Light mode
        lightBg: '#F8FAFC',
        lightText: '#1F2937',
        lightMuted: '#6B7280',

        // Shared
        accentBlue: '#2563EB',
        accentViolet: '#B084F6',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
