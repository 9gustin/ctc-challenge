module.exports = {
  presets: [],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add the external packages that are using Tailwind CSS
    './node_modules/@ctc-mf/learning-paths/**/*.js',
  ],
}
