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
      'error': '#E49078',
      'white': '#FFF',
      'slate': {
        '100': '#EDF3F9',
        '200': '#DFE7F0',
        '300': '#CAD5E1'
      }
    },
    fontFamily: {
      'kurenaido': ['Zen Kurenaido', '游ゴシック', 'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ'],
      'karla': ['Karla', 'Zen Kurenaido', '游ゴシック', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
