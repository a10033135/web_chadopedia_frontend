/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    value: {
        extend: {},
    },
    plugins: [require('daisyui'),require('@tailwindcss/line-clamp')],
    daisyui: {
        themes: ['garden','forest']
    }}
