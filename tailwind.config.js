/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    value: {
        extend: {
            spacing: {
                '64': '32rem'
            }
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/line-clamp'), require('preline/plugin')],
    daisyui: {
        themes: ['garden', 'forest']
    }
}
