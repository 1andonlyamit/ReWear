/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main brand colors
        primary: "#059669",     // emerald-600 - sustainable green
        secondary: "#0891b2",   // cyan-600 - trustworthy blue
        accent: "#f59e0b",      // amber-500 - warm highlight
        
        // Background colors
        background: "#f8fafc",  // slate-50 - clean white
        surface: "#ffffff",     // pure white for cards
        
        // Text colors
        text: {
          primary: "#1e293b",   // slate-800 - main text
          secondary: "#64748b", // slate-500 - secondary text
          muted: "#94a3b8",     // slate-400 - muted text
        },
        
        // Additional utility colors
        success: "#10b981",     // emerald-500
        warning: "#f59e0b",     // amber-500
        error: "#ef4444",       // red-500
        info: "#3b82f6",        // blue-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};