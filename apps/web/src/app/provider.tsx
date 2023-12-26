'use client';

import { type FCC } from '@hashgraph/ui';
import { Toaster } from '@hashgraph/ui';
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
