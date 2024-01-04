'use client';

import { type FCC } from '@swiss-digital-assets-institute/ui';
import { Toaster } from '@swiss-digital-assets-institute/ui';
import React from 'react';

const Provider: FCC = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Provider;
