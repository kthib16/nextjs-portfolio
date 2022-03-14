//tailwind.config.js
module.exports = {
  content: [
    './pages/*.{html,js}',
    './components/*.{html,js}',
    './components/**/*.{html,js}',
    './files/*.pdf',

  ],
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '24rem',
      },
    },
  },
  plugins: [],
}
