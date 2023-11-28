import type { FC, PropsWithChildren, ReactNode } from 'react';

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export type Option<T extends any = any> = {
  label: ReactNode;
  value: T;
};

export type AutoCompleteOption<T extends any = any> = {
  label: ReactNode;
  value: T;
  searchValue: string;
};
