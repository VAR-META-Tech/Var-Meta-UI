import { PluginAPI } from 'tailwindcss/types/config';

function filterDefault(values: any) {
  return Object.fromEntries(Object.entries(values).filter(([key]) => key !== 'DEFAULT'));
}

export const addAnimateUtilities = (
  addUtilities: PluginAPI['addUtilities'],
  matchUtilities: PluginAPI['matchUtilities'],
  theme: PluginAPI['theme']
) => {
  addUtilities({
    '@keyframes enter': theme('keyframes.enter'),
    '@keyframes exit': theme('keyframes.exit'),
    '.animate-in': {
      animationName: 'enter',
      animationDuration: theme('animationDuration.DEFAULT'),
      '--tw-enter-opacity': 'initial',
      '--tw-enter-scale': 'initial',
      '--tw-enter-rotate': 'initial',
      '--tw-enter-translate-x': 'initial',
      '--tw-enter-translate-y': 'initial',
    },
    '.animate-out': {
      animationName: 'exit',
      animationDuration: theme('animationDuration.DEFAULT'),
      '--tw-exit-opacity': 'initial',
      '--tw-exit-scale': 'initial',
      '--tw-exit-rotate': 'initial',
      '--tw-exit-translate-x': 'initial',
      '--tw-exit-translate-y': 'initial',
    },
  });

  matchUtilities(
    {
      'fade-in': (value) => ({ '--tw-enter-opacity': value }),
      'fade-out': (value) => ({ '--tw-exit-opacity': value }),
    },
    { values: theme('animationOpacity') }
  );

  matchUtilities(
    {
      'zoom-in': (value) => ({ '--tw-enter-scale': value }),
      'zoom-out': (value) => ({ '--tw-exit-scale': value }),
    },
    { values: theme('animationScale') }
  );

  matchUtilities(
    {
      'spin-in': (value) => ({ '--tw-enter-rotate': value }),
      'spin-out': (value) => ({ '--tw-exit-rotate': value }),
    },
    { values: theme('animationRotate') }
  );

  matchUtilities(
    {
      'slide-in-from-top': (value) => ({
        '--tw-enter-translate-y': `-${value}`,
      }),
      'slide-in-from-bottom': (value) => ({
        '--tw-enter-translate-y': value,
      }),
      'slide-in-from-left': (value) => ({
        '--tw-enter-translate-x': `-${value}`,
      }),
      'slide-in-from-right': (value) => ({
        '--tw-enter-translate-x': value,
      }),
      'slide-out-to-top': (value) => ({
        '--tw-exit-translate-y': `-${value}`,
      }),
      'slide-out-to-bottom': (value) => ({
        '--tw-exit-translate-y': value,
      }),
      'slide-out-to-left': (value) => ({
        '--tw-exit-translate-x': `-${value}`,
      }),
      'slide-out-to-right': (value) => ({
        '--tw-exit-translate-x': value,
      }),
    },
    { values: theme('animationTranslate') }
  );

  matchUtilities(
    { duration: (value: any) => ({ animationDuration: value }) },
    { values: filterDefault(theme('animationDuration')) }
  );

  matchUtilities({ delay: (value) => ({ animationDelay: value }) }, { values: theme('animationDelay') });

  matchUtilities(
    { ease: (value: any) => ({ animationTimingFunction: value }) },
    { values: filterDefault(theme('animationTimingFunction')) }
  );

  addUtilities({
    '.running': { animationPlayState: 'running' },
    '.paused': { animationPlayState: 'paused' },
  });

  matchUtilities({ 'fill-mode': (value) => ({ animationFillMode: value }) }, { values: theme('animationFillMode') });

  matchUtilities({ direction: (value) => ({ animationDirection: value }) }, { values: theme('animationDirection') });

  matchUtilities({ repeat: (value) => ({ animationIterationCount: value }) }, { values: theme('animationRepeat') });
};

export const animateExtendedTheme: any = {
  animationDelay: ({ theme }: PluginAPI) => ({
    ...theme('transitionDelay'),
  }),
  animationDuration: ({ theme }: PluginAPI) => ({
    0: '0ms',
    ...theme('transitionDuration'),
  }),
  animationTimingFunction: ({ theme }: PluginAPI) => ({
    ...theme('transitionTimingFunction'),
  }),
  animationFillMode: {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both',
  },
  animationDirection: {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    'alternate-reverse': 'alternate-reverse',
  },
  animationOpacity: ({ theme }: PluginAPI) => ({
    DEFAULT: 0,
    ...theme('opacity'),
  }),
  animationTranslate: ({ theme }: PluginAPI) => ({
    DEFAULT: '100%',
    ...theme('translate'),
  }),
  animationScale: ({ theme }: PluginAPI) => ({
    DEFAULT: 0,
    ...theme('scale'),
  }),
  animationRotate: ({ theme }: PluginAPI) => ({
    DEFAULT: '30deg',
    ...theme('rotate'),
  }),
  animationRepeat: {
    0: '0',
    1: '1',
    infinite: 'infinite',
  },
  keyframes: {
    enter: {
      from: {
        opacity: 'var(--tw-enter-opacity, 1)',
        transform:
          'translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))',
      },
    },
    exit: {
      to: {
        opacity: 'var(--tw-exit-opacity, 1)',
        transform:
          'translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))',
      },
    },
  },
};
