import * as React from 'react';
import type * as Radix from '@radix-ui/react-primitive';
import { Primitive } from '@radix-ui/react-primitive';

import { useDialogContext } from './dialog.context';

const TITLE_NAME = 'DialogTitle';

type DialogTitleElement = React.ElementRef<typeof Primitive.h2>;
type PrimitiveHeading2Props = Radix.ComponentPropsWithoutRef<typeof Primitive.h2>;
export interface DialogTitleProps extends PrimitiveHeading2Props {}

export const DialogTitle = React.forwardRef<DialogTitleElement, DialogTitleProps>(
  (props: DialogTitleProps, forwardedRef) => {
    const { ...titleProps } = props;
    const context = useDialogContext();
    return <Primitive.h2 id={context.titleId} {...titleProps} ref={forwardedRef} />;
  }
);

DialogTitle.displayName = TITLE_NAME;
