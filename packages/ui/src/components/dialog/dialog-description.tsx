import type * as Radix from '@radix-ui/react-primitive';
import { Primitive } from '@radix-ui/react-primitive';
import * as React from 'react';

import { useDialogContext } from './dialog.context';

const DESCRIPTION_NAME = 'DialogDescription';

type DialogDescriptionElement = React.ElementRef<typeof Primitive.p>;
type PrimitiveParagraphProps = Radix.ComponentPropsWithoutRef<typeof Primitive.p>;
export interface DialogDescriptionProps extends PrimitiveParagraphProps {}

export const DialogDescription = React.forwardRef<DialogDescriptionElement, DialogDescriptionProps>(
  (props: DialogDescriptionProps, forwardedRef) => {
    const { ...descriptionProps } = props;
    const context = useDialogContext();
    return <Primitive.p id={context.descriptionId} {...descriptionProps} ref={forwardedRef} />;
  }
);

DialogDescription.displayName = DESCRIPTION_NAME;
