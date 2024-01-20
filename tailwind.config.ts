/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    colors: {
      'primary': '#25374B',
      'secondary': '#A0C5B4',
      'white': '#FFF'
    },
    fontFamily: {
      'kurenaido': ['Zen Kurenaido', '游ゴシック', 'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ'],
      'karla': ['Karla', 'Zen Kurenaido', '游ゴシック', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
