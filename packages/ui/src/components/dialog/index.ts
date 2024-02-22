import { Dialog, type DialogProps } from './dialog';
import { DialogClose, type DialogCloseProps } from './dialog-close';
import { DialogContent, type DialogContentProps } from './dialog-content';
import { DialogDescription, type DialogDescriptionProps } from './dialog-description';
import { DialogOverlay, type DialogOverlayProps } from './dialog-overlay';
import { DialogPortal, type DialogPortalProps } from './dialog-portal';
import { DialogTitle, type DialogTitleProps } from './dialog-title';
import { DialogTrigger, type DialogTriggerProps } from './dialog-trigger';

const Root = Dialog;
const Trigger = DialogTrigger;
const Portal = DialogPortal;
const Overlay = DialogOverlay;
const Content = DialogContent;
const Title = DialogTitle;
const Description = DialogDescription;
const Close = DialogClose;

export {
  Close,
  Content,
  Description,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
};
export type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
};
