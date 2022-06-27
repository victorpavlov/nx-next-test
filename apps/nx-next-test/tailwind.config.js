const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
