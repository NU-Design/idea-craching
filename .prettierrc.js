module.exports = {
  tabWidth: 2, // Airbnb style
  singleQuote: true, // Airbnb style
  endOfLine: 'auto', // keep EOL as-is
  trailingComma: 'all', // Airbnb style
  overrides: [
    {
      files: ['**/*.css', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
