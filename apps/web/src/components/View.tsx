/* eslint-disable unused-imports/no-unused-vars */
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import * as React from 'react';

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
    <div className="flex grow flex-col divide-y divide-border-secondary border shadow-sm">
      <div className="flex items-center space-x-2 bg-background p-2.5 text-foreground">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div
        style={{ flexDirection, justifyContent }}
        className="flex flex-wrap items-start justify-center gap-x-2 gap-y-2 bg-background p-2.5"
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
    <div className="flex flex-col divide-y divide-divider border border-border shadow-sm">
      <div className="flex items-center space-x-2 bg-background p-2.5 text-foreground">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div className="relative flex-1 space-x-1 bg-background p-2.5">{props.children}</div>
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
