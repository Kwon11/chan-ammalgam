module.exports = {
  presets: ['next/babel'], // Includes everything needed for Next.js
  plugins: [
    ['styled-components', { 'ssr': true, 'displayName': true }]
  ]
};
