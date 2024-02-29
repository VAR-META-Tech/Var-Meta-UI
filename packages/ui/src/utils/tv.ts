import { type TV, tv as tvBase } from 'tailwind-variants';

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    responsiveVariants: true,
  });
