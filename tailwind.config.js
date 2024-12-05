/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        colors: {
            primary: '#34944F',
            error: '#EF1212',
            paragraph: '#4F4F4F',
            title: '#0D0D0D',
            black: '#000000',
            white: '#ffffff'
        },
        extend:{
            boxShadow: {
        'box': '4px 11px 20px 0px #00000012',
      }
        }
    },
    plugins: [],
}

