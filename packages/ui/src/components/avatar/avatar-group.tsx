import { cn } from '@hashgraph/utils';
import React, { type ReactElement } from 'react';

import { Avatar, type AvatarProps } from './avatar';

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  max?: number;
  total?: number;
  formatTotal?: (v: number) => React.ReactNode;
  size?: NonNullable<AvatarProps['size']>;
}

const mappingSpacing: Record<NonNullable<AvatarProps['size']>, number> = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
};

const AvatarGroup = React.forwardRef<React.ElementRef<'div'>, AvatarGroupProps>((props, ref) => {
  const { className, size = 'md', children: childrenProp, formatTotal, total, max = 5, ...etc } = props;

  const children = React.Children.toArray(childrenProp).filter((child) => {
    return React.isValidElement(child);
  }) as unknown as ReactElement[];

  let clampedMax = max < 2 ? 2 : max;
  const totalAvatars = total || children.length;

  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }

  clampedMax = Math.min(totalAvatars + 1, clampedMax);

  const maxAvatars = Math.min(children.length, clampedMax - 1);
  const extraAvatars = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
  const extraAvatarsElement = formatTotal ? formatTotal(extraAvatars) : `+${extraAvatars}`;

  const marginLeft = -mappingSpacing[size];

  return (
    <div ref={ref} className={cn('flex w-auto', className)} {...etc}>
      {children
        .slice(0, maxAvatars)
        .reverse()
        .map((child, index) => {
          return React.cloneElement(child, {
            ...child.props,
            size,
            outlined: true,
            style: {
              marginLeft: index === 0 ? undefined : marginLeft,
              ...child.props.style,
            },
          });
        })}

      <Avatar
        className={cn('text-gray-600 text-base', {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
        })}
        outlined
        style={{ marginLeft }}
        src=""
        size={size}
      >
        {extraAvatarsElement}
      </Avatar>
    </div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
