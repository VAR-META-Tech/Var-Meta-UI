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
    <div className="flex grow flex-col divide-y divide-gray-200 border shadow-sm">
      <div className="flex items-center space-x-2 bg-gray-100/75 p-2.5 text-gray-800">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div
        style={{ flexDirection, justifyContent }}
        className="bg-grid flex flex-wrap items-start justify-center gap-x-2 gap-y-2 bg-gray-50/25 p-2.5"
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
    <div className="flex flex-col divide-y divide-gray-200 border border-border shadow-sm">
      <div className="flex items-center space-x-2 bg-gray-100/75 p-2.5 text-gray-800">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div className="bg-grid relative flex-1 space-x-1 bg-gray-50/50 p-2.5">{props.children}</div>
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
