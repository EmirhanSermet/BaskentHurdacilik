import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#0ea5e9',
        muted: '#1f2937',
        sand: '#f3f4f6',
        success: '#22c55e'
      },
      boxShadow: {
        glow: '0 10px 40px rgba(14,165,233,0.25)'
      },
      backgroundImage: {
        'radial-faint': 'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.08), transparent 25%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.1), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;
