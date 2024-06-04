import React from 'react';

import { cn } from '../../utils/cn';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('border-border-secondary border-t px-6 pb-4 pt-3 text-sm', className)}
      {...props}
    />
  )
);
TableCaption.displayName = 'TableCaption';

export { TableCaption };
