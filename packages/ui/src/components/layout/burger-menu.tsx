import { forwardRef, useMemo, type ElementRef } from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';

import { type ElementProps } from '../../types';
import { cn } from '../../utils/cn';
import { useSidebarContext } from './sidebar.context';

const BurgerMenu = forwardRef<ElementRef<'button'>, ElementProps<'button'>>(
  ({ children, className, onClick, ...props }, ref) => {
    const { open, isMobile, toggleOpen } = useSidebarContext();

    if (!isMobile) return null;
    return (
      <button
        type="button"
        onClick={composeEventHandlers(toggleOpen, onClick)}
        className={cn('relative h-8 w-8', className)}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            [
              'bg-foreground h-px w-6 transition-transform duration-200 ease-[cubic-bezier(.55,.055,.675,.19)]',
              "before:contents-[''] before:bg-foreground before:absolute before:top-2 before:block before:h-px before:w-6 before:transition-[opacity,top]",
              "after:contents-[''] after:bg-foreground after:absolute after:bottom-2 after:block after:h-px after:w-6 after:transition-[transform,bottom] after:ease-[cubic-bezier(.215,.61,.355,1)]",
            ],
            {
              'rotate-[225deg] before:top-0 before:opacity-0 after:bottom-0 after:-rotate-90': open,
            }
          )}
        />
      </button>
    );
  }
);

export { BurgerMenu };
