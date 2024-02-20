export default {
  /**
   * Custom utilities
   */
  '.leading-inherit': {
    'line-height': 'inherit',
  },
  '.bg-img-inherit': {
    'background-image': 'inherit',
  },
  '.bg-clip-inherit': {
    'background-clip': 'inherit',
  },
  '.text-fill-inherit': {
    '-webkit-text-fill-color': 'inherit',
  },
  '.tap-highlight-transparent': {
    '-webkit-tap-highlight-color': 'transparent',
  },
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
};
