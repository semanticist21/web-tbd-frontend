import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
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
      height: {
        '128': '32rem',
        '144': '36rem',
        '156': '39rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '156': '39rem',
      },
      colors: {
        fg: 'rgb(var(--fg-rgb))',
        'bg-start': 'rgb(var(--bg-start-rgb))',
        'bg-end': 'rgb(var(--bg-end-rgb))',
      },
    },
  },
  plugins: [],
}
export default config
