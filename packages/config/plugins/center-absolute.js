const plugin = require('tailwindcss/plugin');

const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.inset-center': {
      top: '50%',
      left: '50%',
      '@apply absolute -translate-x-1/2 -translate-y-1/2': {},
    },
    '.inset-y-center': {
      top: '50%',
      '@apply absolute -translate-y-1/2': {},
    },
    '.inset-x-center': {
      left: '50%',
      '@apply absolute -translate-x-1/2': {},
    },
  });
});

module.exports = utilities;
