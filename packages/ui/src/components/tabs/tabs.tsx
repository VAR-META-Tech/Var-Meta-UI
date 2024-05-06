import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { Badge, type BadgeProps } from '../badge';

interface TabsContextValue {
  variant?: 'primary' | 'gray' | 'white' | 'underline' | 'underline-filled' | 'vertical-line';
  size?: 'sm' | 'md';
  orientation?: 'horizontal' | 'vertical';
}

const TabsContext = React.createContext<TabsContextValue>({});

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (context === undefined) {
    throw new Error('useTabsContext must be used within a TabsContextProvider');
  }
  return context;
};

export interface TabsRootProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, TabsContextValue {}

const TabsRoot = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsRootProps>(
  ({ className, variant = 'primary', size = 'sm', orientation = 'horizontal', ...props }, ref) => {
    const value = React.useMemo(() => {
      return {
        orientation,
        variant,
        size,
      };
    }, [orientation, size, variant]);

    return (
      <TabsContext.Provider value={value}>
        <TabsPrimitive.Root orientation={orientation} ref={ref} className={cn(className)} {...props} />
      </TabsContext.Provider>
    );
  }
);
TabsRoot.displayName = TabsPrimitive.Root.displayName;

const tabListVariants = cva(
  ['inline-flex items-start gap-1', 'data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-1'],
  {
    variants: {
      variant: {
        primary: [],
        gray: [],
        white: ['p-1 bg-gray-50 border border-border-secondary'],
        underline: [],
        'underline-filled': [],
        'vertical-line': [],
        'vertical-line-filled': [],
      },
      size: {
        sm: '',
        md: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
    compoundVariants: [
      {
        variant: 'white',
        size: 'sm',
        className: 'rounded-lg',
      },
      {
        variant: 'white',
        size: 'md',
        className: 'rounded-xl',
      },
    ],
  }
);

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { variant, size } = useTabsContext();

    return <TabsPrimitive.List ref={ref} className={cn(tabListVariants({ variant, size, className }))} {...props} />;
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;

const tabTriggerVariants = cva(
  [
    'inline-flex w-full items-center justify-center transition-all gap-2',
    'data-[orientation=vertical]:justify-start',
    'whitespace-nowrap rounded-sm text-sm font-semibold',
    'disabled:pointer-events-none text-gray-500',
  ],
  {
    variants: {
      variant: {
        primary: [
          'data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700 focus-visible:shadow-brand-base',
          'hover:bg-brand-50 hover:text-brand-700 ',
        ],
        gray: [
          'data-[state=active]:bg-gray-50 data-[state=active]:text-foreground-secondary focus-visible:shadow-gray-base',
          'hover:bg-gray-50 hover:text-foreground-secondary',
        ],
        white: [
          'data-[state=active]:bg-white data-[state=active]:text-gray-600 data-[state=active]:shadow-sm',
          ' hover:shadow-sm hover:bg-white hover:text-gray-600',
        ],
        underline: [
          'border-b-2 border-transparent rounded-none',
          ' data-[state=active]:border-brand-600 data-[state=active]:text-brand-600 ',
          'hover:border-brand-600 hover:text-brand-600',
        ],
        'underline-filled': [
          'border-b-2 border-transparent rounded-none',
          ' data-[state=active]:border-brand-600 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-600 ',
          'hover:border-brand-600 hover:text-brand-600',
        ],
        'vertical-line': [
          'border-l-2 border-transparent rounded-none',
          ' data-[state=active]:border-brand-600 data-[state=active]:text-brand-600 ',
          'hover:border-brand-600 hover:text-brand-600',
        ],
        'vertical-line-filled': [
          'border-l-2 border-transparent rounded-none',
          ' data-[state=active]:border-brand-600 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-600 ',
          'hover:border-brand-600 hover:text-brand-600',
        ],
      },
      size: {
        sm: 'h-9 px-3 py-2 text-sm ',
        md: 'h-11 py-2 px-3 text-md',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'primary',
    },
    compoundVariants: [
      {
        variant: 'underline',
        size: 'sm',
        className: 'px-1 pt-0 pb-3 h-8',
      },
      {
        variant: 'underline',
        size: 'md',
        className: 'px-1 pt-0 pb-3 h-9',
      },
    ],
  }
);

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  badgeProps?: BadgeProps;
  badge?: React.ReactNode;
}

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, children, badge, badgeProps, ...props }, ref) => {
    const { variant, size } = useTabsContext();

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          tabTriggerVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      >
        {children}
        {badge && (
          <Badge iconOnly {...badgeProps}>
            {badge}
          </Badge>
        )}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={cn('mt-2', className)} {...props} />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export interface TabItemOption {
  label: string;
  value: string;
  badge?: React.ReactNode;
  badgeProps?: BadgeProps;
}

export interface TabsProps extends TabsRootProps, TabsContextValue {
  options?: TabItemOption[];
}

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>((props, ref) => {
  const { children, options = [], ...etc } = props;

  return (
    <TabsRoot ref={ref} {...etc}>
      <TabsList>
        {options?.map((x) => (
          <TabsTrigger key={x.value} value={x.value} badge={x?.badge} badgeProps={x?.badgeProps}>
            {x.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </TabsRoot>
  );
});
TabsRoot.displayName = TabsPrimitive.Root.displayName;

export { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger };
