import React from 'react';

import { cn } from '../../utils/cn';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn('px-6 pt-3 pb-4 border-t border-gray-200 text-sm ', className)} {...props} />
  )
);
TableCaption.displayName = 'TableCaption';

export { TableCaption };
