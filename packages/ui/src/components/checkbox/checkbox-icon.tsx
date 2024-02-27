import { type ElementProps } from '../../types';
import { MinusIcon } from '../icons';

export interface CheckboxIconProps extends ElementProps<'svg'> {
  checked?: boolean | 'indeterminate';
  disableAnimation?: boolean;
}

export function CheckboxIcon(props: CheckboxIconProps) {
  const { checked, disableAnimation, ...otherProps } = props;

  if (checked === 'indeterminate') return <MinusIcon className="w-3 h-w-3" {...otherProps} />;

  return (
    <svg
      aria-hidden="true"
      role="presentation"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M10 3 4.5 8.5 2 6"
        stroke="currentColor"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={11.32}
        strokeDashoffset={11.32}
        className="group-data-[state=checked]:[stroke-dashoffset:0]"
        style={
          disableAnimation
            ? {}
            : {
                transition: 'stroke-dashoffset 200ms linear 0.1s',
              }
        }
      />
    </svg>
  );
}
