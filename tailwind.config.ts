import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anta: ['Anta', 'noto-sans'],
      },
      fontSize: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1rem',
        h6: '0.875rem',
      },
      height: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
      },
      width: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
      },
      colors: {
        fg: 'rgb(var(--fg-rgb))',
        'bg-start': 'rgb(var(--bg-start-rgb))',
        'bg-end': 'rgb(var(--bg-end-rgb))',
        'bg-naver': '#03C759',
        'bg-kakao': '#FFEB00',
        'fg-kakao': '#3C1E1E',
        'fg-gray-desc': '#9E9E9E',
      },
    },
  },
  plugins: [],
}
export default config
