'use client';

import { type FCC } from '@var-ui/core';
import { Toaster } from '@var-ui/core';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Provider: FCC = ({ children }) => {
  return (
    <>
      <ThemeProvider enableColorScheme defaultTheme="light">
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default Provider;
