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

export type ReactNodeExcluded = Exclude<React.ReactNode, string> | (string & {});
export type NumberExcluded = number & {};

export type ElementProps<ElementType extends React.ElementType, PropsToOmit extends string = never> = Omit<
  React.ComponentPropsWithoutRef<ElementType>,
  PropsToOmit
>;

export interface VisibleState {
  /** Controllable component open state */
  open?: boolean;
  /** Controllable component open state */
  defaultOpen?: boolean;
  /** Callback fired when open state changes */
  onOpenChange?: (open: boolean) => void;
}
