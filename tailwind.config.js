/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';
module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: '#E6E9F0',
        darkgray: '#595959',
        lightgray: '#F2F2F2',
        enabled: '#d7d7d7',
        outline: '#E6E9F0',
        'disabled-bg': '#EFF3FA',
        'disabled-text': '#707A89',
        'overlay-backdrop': 'rgba(0, 0, 0, 0.4)',
        lightblue: '#0BFFD5',
        navy: '#2B3D5D',
        pink: '#F61067',
        blue: '#3F7CFF',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(navy|lightblue|pink|blue|gray|lightgray|darkgray|white|black|enabled)/,
    },
    {
      pattern:
        /bg-(navy|lightblue|pink|blue|gray|lightgray|darkgray|white|black|enabled)\/(5|10|20|30|40|50|60|70|80|90|100)/,
      variants: ['hover', 'focus'],
    },
  ],
};
