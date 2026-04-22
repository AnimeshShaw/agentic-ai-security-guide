/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: 'rgba(99,102,241,0.08)',
        },
        danger: { DEFAULT: '#EF4444', bg: '#FEF2F2' },
        warning: { DEFAULT: '#F59E0B', bg: '#FFFBEB' },
        defense: { DEFAULT: '#22C55E', bg: '#F0FDF4' },
        info: { DEFAULT: '#38BDF8', bg: '#F0F9FF' },
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
          surface2: '#334155',
          text: '#F1F5F9',
          muted: '#94A3B8',
          accent: '#38BDF8',
          border: '#334155',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
