'use client';

import React from 'react';
import { Toaster, type FCC } from '@var-ui/core';
import { ThemeProvider } from 'next-themes';

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
