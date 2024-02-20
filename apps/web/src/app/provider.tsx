'use client';

import { type FCC } from '@var-ui/core';
import { Toaster } from '@var-ui/core';
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
