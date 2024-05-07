module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    'cleanupIDs', // Place cleanupIDs before or after preset-default
    {
      name: 'preset-default',
    }
  ],
};