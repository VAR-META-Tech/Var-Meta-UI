'use client';

import { type FCC } from '@var-meta/ui';
import { Toaster } from '@var-meta/ui';
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
