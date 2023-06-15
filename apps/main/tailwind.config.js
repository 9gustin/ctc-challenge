module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add the external packages that are using Tailwind CSS
    './node_modules/@9gustin/learning-paths/src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
}
