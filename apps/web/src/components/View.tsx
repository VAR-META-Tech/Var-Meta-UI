/* eslint-disable unused-imports/no-unused-vars */
import type { ReactNode } from 'react';
import * as React from 'react';
import { cva } from 'class-variance-authority';

interface ViewProps extends React.PropsWithChildren {
  prop?: any;
  value?: any;
  direction?: 'column' | 'row';
  justify?: 'start' | 'evenly';
  props?: any;
}

export const View = ({ prop, value = '', direction = 'row', justify = 'evenly', children }: ViewProps) => {
  const flexDirection = direction === 'column' ? 'column' : 'row';
  const justifyContent = justify === 'start' ? 'flex-start' : 'space-evenly';
  return (
    <div className="divide-border-secondary flex grow flex-col divide-y border shadow-sm">
      <div className="bg-background text-foreground flex items-center space-x-2 p-2.5">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div
        style={{ flexDirection, justifyContent }}
        className="bg-background flex flex-wrap items-start justify-center gap-2 p-2.5"
      >
        {children}
      </div>
    </div>
  );
};

export const EnhancedView = ({ prop, value = '', ...props }: ViewProps) => {
  const child = React.Children.only(props.children) as any;
  const { children, ...rest } = child!.props!;

  return (
    <div className="divide-divider border-border flex flex-col divide-y border shadow-sm">
      <div className="bg-background text-foreground flex items-center space-x-2 p-2.5">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div className="bg-background relative flex-1 space-x-1 p-2.5">{props.children}</div>
    </div>
  );
};

export const Badge = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex items-center space-x-0">
      <span>=&quot;</span>
      <div className="rounded border border-dashed border-red-200 bg-yellow-100 px-1 text-sm text-yellow-700">
        {children}
      </div>
      <span>&quot;</span>
    </div>
  );
};

export const ViewGroup = ({
  children,
  direction = 'column',
}: {
  children: ReactNode;
  direction?: 'column' | 'row';
}) => {
  const viewClasses = cva(['flex', 'justify-evenly'], {
    variants: {
      direction: {
        row: ['flex-row', 'space-x-5'],
        column: ['flex-col', 'space-y-5'],
      },
    },
  });

  return <div className={viewClasses({ direction })}>{children}</div>;
};
