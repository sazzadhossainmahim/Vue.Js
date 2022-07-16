/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridAutoRows: {
                '2fr': 'minmax(50px, 2fr)',
            }
        },
    },
    plugins: [],
}