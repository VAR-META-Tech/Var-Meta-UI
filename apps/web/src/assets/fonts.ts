import { Roboto as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export const fontSerif = localFont({
  variable: '--font-serif',
  src: [
    {
      path: './fonts/StyreneA-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/StyreneA-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },

    {
      path: './fonts/StyreneA-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/StyreneA-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/StyreneA-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/StyreneA-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});
