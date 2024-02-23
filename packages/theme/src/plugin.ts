import forEach from 'lodash.foreach';
import get from 'lodash.get';
import omit from 'lodash.omit';
import plugin from 'tailwindcss/plugin.js';
import { ConfigTheme, ConfigThemes, DefaultThemeType, PluginConfig } from './types';
import deepMerge from 'deepmerge';
import { utilities, animateExtendedTheme, addAnimateUtilities } from './utilities';
import flatten from 'flat';
import {
  defaultDarkColors,
  defaultLightColors,
  defaultFont,
  defaultWidth,
  defaultSpacing,
  defaultRadius,
  defaultShadow,
  defaultKeyFrame,
  defaultAnimation,
  defaultContainer,
  defaultScreen,
  baseStyles,
} from './configs';

import Color from 'color';

const DEFAULT_PREFIX = 'var';

const cacheColors: Record<string, number[]> = {};

type ResolvedVariants = Array<{ name: string; definition: string[] }>;
type ResolvedUtilities = { [selector: string]: Record<string, any> };
type ResolvedColors = {
  [colorName: string]: ({ opacityValue, opacityVariable }: { opacityValue: string; opacityVariable: string }) => string;
};
type Resolved = {
  variants: ResolvedVariants;
  utilities: ResolvedUtilities;
  colors: ResolvedColors;
};

function removeDefaultKeys<T extends Object>(obj: T) {
  const newObj = {};

  for (const key in obj) {
    if (key.endsWith('-DEFAULT')) {
      // @ts-ignore
      newObj[key.replace('-DEFAULT', '')] = obj[key];
      continue;
    }
    // @ts-ignore
    newObj[key] = obj[key];
  }

  return newObj;
}

const flattenColors = <TTarget>(obj: TTarget) =>
  removeDefaultKeys(flatten(obj, { safe: true, delimiter: '-' }) as Object);

const resolveConfig = (themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string) => {
  const resolved: Resolved = {
    variants: [],
    utilities: {},
    colors: {},
  };

  for (const [themeName, { colors, extend }] of Object.entries(themes)) {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : extend;

    // if the theme is the default theme, add the selector to the root element
    if (themeName === defaultTheme) {
      cssSelector = `:root,${cssSelector}`;
    }

    resolved.utilities[cssSelector] = scheme ? { 'color-scheme': scheme } : {};
    // resolved.variants
    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    });

    const flatColors = flattenColors(colors) as Record<string, string>;

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      try {
        const parsedColor = cacheColors[colorValue] || Color(colorValue).hsl().round().array();

        cacheColors[colorValue] = parsedColor;

        const [h, s, l, defaultAlphaValue] = parsedColor;

        const appColorVariable = `--${prefix}-${colorName}`;
        const appOpacityVariable = `--${prefix}-${colorName}-opacity`;

        // set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![appColorVariable] = `${h} ${s}% ${l}%`;
        // if an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector]![appOpacityVariable] = defaultAlphaValue.toFixed(2);
        }
        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${appColorVariable}) / ${opacityValue})`;
          }
          // if no opacityValue was provided (=it is not parsable to a number)
          // the appOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable) {
            return `hsl(var(${appColorVariable}) / var(${appOpacityVariable}, var(${opacityVariable})))`;
          }

          return `hsl(var(${appColorVariable}) / var(${appOpacityVariable}, 1))`;
        };
      } catch (error: any) {
        console.log('error', error?.message);
      }
    }
  }

  return resolved;
};

const corePlugin = (themes: ConfigThemes | {} = {}, defaultTheme: DefaultThemeType, prefix: string) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);

  return plugin(
    ({ addBase, addUtilities, addVariant, matchUtilities, theme, config }) => {
      // add base classNames
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(prefix),
          '--toaster-width': '440px',
          '@media (max-width: 37.5rem)': {
            '--toaster-width': '359px',
          },
        },
      });
      // add the css variables to "@layer utilities"
      addUtilities({ ...resolved?.utilities, ...utilities });
      addAnimateUtilities(addUtilities, matchUtilities, theme);
      // add the theme as variant e.g. "[theme-name]:text-2xl"
      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition);
      });
    },
    // extend the colors config
    {
      theme: {
        screens: defaultScreen,
        container: defaultContainer,
        extend: deepMerge(
          {
            colors: resolved?.colors as any,
            fontSize: defaultFont,
            width: defaultWidth,
            maxWidth: defaultWidth,
            minWidth: defaultWidth,
            spacing: defaultSpacing,
            borderRadius: defaultRadius,
            boxShadow: defaultShadow,
            keyframes: defaultKeyFrame,
            animation: defaultAnimation,
          },
          animateExtendedTheme
        ),
      },
    }
  );
};

export const createThemes = (config: PluginConfig = {}): ReturnType<typeof plugin> => {
  const { themes: themeObject = {}, defaultTheme = 'light', prefix: defaultPrefix = DEFAULT_PREFIX } = config;

  const userLightColors = get(themeObject, 'light.colors', {});
  const userDarkColors = get(themeObject, 'dark.colors', {});

  const light = {
    colors: deepMerge(defaultLightColors, userLightColors),
  };

  const dark = {
    colors: deepMerge(defaultDarkColors, userDarkColors),
  };

  const themes: Record<string, ConfigTheme> = {
    light,
    dark,
  };

  return corePlugin(themes, defaultTheme, defaultPrefix);
};
