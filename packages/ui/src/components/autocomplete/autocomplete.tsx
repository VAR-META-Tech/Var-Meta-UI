import { useMergeRefs } from '@floating-ui/react';
import { Portal } from '@radix-ui/react-portal';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { cva } from 'class-variance-authority';
import {
  type ElementRef,
  forwardRef,
  type KeyboardEvent,
  type ReactElement,
  type Ref,
  useCallback,
  useRef,
  useState,
} from 'react';

import { type Option, type VisibleState } from '../../types';
import { cn } from '../../utils/cn';
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command';
import { Command as CommandPrimitive } from '../command/cmdk';
import { commandScore } from '../command/cmdk/command-score';
import { CheckIcon, CloseIcon, SearchIcon } from '../icons';
import { type InputProps, inputVariants } from '../input/input';
import { PopperAnchor, PopperContent, PopperRoot } from '../popper';
import { Skeleton } from '../skeleton';
import { Tag } from '../tag';
import { Show, VStack } from '../utility';

type TValue<T extends boolean> = T extends true ? string[] : string;
const autocompleteVariants = cva('inline-flex flex-col', {
  variants: {
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {},
});

export interface AutocompleteProps<T extends boolean = false>
  extends Omit<InputProps, 'suffixClassName' | 'prefixClassName'>,
    VisibleState {
  options: Option[];
  value?: TValue<T>;
  defaultValue?: TValue<T>;
  onValueChange?: (value: TValue<T>) => void;
  onInputChange?: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
  allowsCustomValue?: boolean;
  clearable?: boolean;
  placeholder?: string;
  name?: string;
  multiple?: T;
}

const AutocompleteComponent = <T extends boolean = false>(
  props: AutocompleteProps<T>,
  autoCompleteRef: Ref<ElementRef<'input'>>
) => {
  const {
    options = [],
    onValueChange,
    loading = false,
    clearable,
    suffix,
    onInputChange,
    variant,
    size = 'md',
    className,
    prefix,
    open: openProp,
    defaultOpen,
    value: valueProp,
    defaultValue = (props?.multiple ? [] : undefined) as any,
    onOpenChange,
    multiple,
    allowsCustomValue,
    fullWidth,
    ...etc
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useMergeRefs([autoCompleteRef, inputRef]);

  const [isOpen = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const [selected, setSelected] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const handleNewValue = useCallback(
    (val: string) => {
      if (!multiple) {
        setSelected(val as TValue<T>);
        return;
      }

      let newValue = (selected ?? []) as string[];
      // Hack for switch from single to multiple
      if (typeof selected === 'string') {
        newValue = [selected];
      }
      const itemIndex = newValue?.findIndex((x) => x === val);
      if (itemIndex !== -1) {
        newValue.splice(itemIndex, 1);
        setInputValue('');
      } else {
        newValue.push(val);
        setSelected(newValue as TValue<T>);
        setInputValue('');
      }
    },
    [multiple, selected, setSelected]
  );

  const handleRemoveValue = useCallback(
    (val: string) => {
      if (typeof selected === 'string') return;

      const newSelected = selected?.filter((x) => x !== val) as TValue<T>;
      setSelected(newSelected);
      return newSelected;
    },
    [selected, setSelected]
  );

  const [inputValue, setInputValue] = useState<string>();

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behavior of the <input /> field
      if (allowsCustomValue) {
        if (multiple) {
          if (event.key === 'Enter' && input.value !== '') {
            handleNewValue(input.value);
          }
        } else {
          handleNewValue(input.value);
        }
      } else {
        if (event.key === 'Enter' && input.value !== '') {
          const optionToSelect = options.find((option) => option.label === input.value);
          if (optionToSelect) {
            handleNewValue(optionToSelect.value);
          }
        }
      }

      if (event.key === 'Escape') {
        input.blur();
      }
    },
    [allowsCustomValue, handleNewValue, isOpen, multiple, options, setOpen]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(false);
      if (e.relatedTarget) return;
      if (!multiple) {
        setInputValue((selected ?? inputValue) as string);
      }
    },
    [inputValue, multiple, selected, setOpen]
  );

  const handleSelectOption = useCallback(
    (selectedValue: Option) => {
      if (props?.disabled) return;
      setInputValue(selectedValue.value);
      handleNewValue(selectedValue.value);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [props?.disabled, handleNewValue]
  );

  const handleChange = (val: string) => {
    onInputChange?.(val);
    setInputValue(val);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onInputChange?.('');
    setInputValue('');
    setSelected((multiple ? [] : '') as TValue<T>);
  };

  /**
   * * This is a hack to prevent the input from being focused after the user selects an option
   */
  const handleSearch = (val: string, search: string) => {
    const input = inputRef.current;
    if (input?.value !== selected) {
      return commandScore(val, search);
    }
    return 1;
  };

  return (
    <div className={autocompleteVariants({ fullWidth })}>
      <CommandPrimitive disableDefaultSelectFirstItem={allowsCustomValue} filter={handleSearch} onKeyUp={handleKeyUp}>
        <PopperRoot>
          <PopperAnchor>
            <div
              className={cn(inputVariants({ variant, className, size: 'none' }), {
                'group flex justify-start flex-wrap items-center gap-2': true,
                'focus-within:shadow-brand-xs': variant === 'default' || !variant,
                'focus-within:shadow-error-xs': variant === 'destructive',
                'shadow-xs cursor-not-allowed bg-background-secondary text-disabled': props.disabled,
                'min-h-[40px] px-3 py-2': size === 'sm',
                'min-h-[44px] px-3.5 py-2.5': size === 'md',
              })}
            >
              {prefix ?? <SearchIcon className="shrink-0" />}

              {multiple &&
                Array.isArray(selected) &&
                selected?.length !== 0 &&
                ((selected ?? []) as string[])?.map((value) => (
                  <Tag closeIcon onClose={() => handleRemoveValue(value)} key={value}>
                    {value}
                  </Tag>
                ))}

              <CommandInput
                ref={ref}
                value={inputValue}
                onValueChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setOpen(true)}
                prefix={<></>}
                className={cn('h-full flex-1 peer')}
                fullWidth
                wrapperClassName={cn('border-none p-0 flex-1 min-w-28')}
                {...etc}
              />

              <Show when={clearable || !!suffix}>
                <div className="flex items-center">
                  {clearable ? (
                    <button
                      onClick={handleClear}
                      className={cn(
                        'invisible opacity-0 pointer-events-none z-10 w-6 h-6 hover:bg-background-secondary hover:text-foreground-secondary outline-none text-foreground-secondary flex items-center justify-center rounded-full relative transition-all ',
                        {
                          'group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100':
                            selected?.length !== 0,
                        }
                      )}
                    >
                      <CloseIcon />
                    </button>
                  ) : null}
                  {suffix ? (
                    <div
                      className={cn('bg-base-white', {
                        'text-error-300': variant === 'destructive',
                      })}
                    >
                      {suffix}
                    </div>
                  ) : null}
                </div>
              </Show>
            </div>
          </PopperAnchor>
          {isOpen && (
            <Portal asChild>
              <PopperContent
                data-state={isOpen ? 'open' : 'closed'}
                className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 mt-1 bg-transparent shadow-none"
              >
                <CommandList className="max-h-[var(--radix-popper-available-height)] border border-border-secondary rounded-sm bg-background shadow-md">
                  {loading ? (
                    <CommandPrimitive.Loading>
                      <VStack spacing={4} className="p-1">
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                      </VStack>
                    </CommandPrimitive.Loading>
                  ) : (
                    <Show when={!allowsCustomValue}>
                      <CommandEmpty>No Options</CommandEmpty>
                    </Show>
                  )}

                  <CommandGroup>
                    {(loading ? [] : options).map((option) => {
                      const isSelected = multiple ? selected?.includes(option.value) : selected === option.value;
                      return (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          onMouseDown={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                          }}
                          onSelect={() => handleSelectOption(option)}
                          className={cn('flex w-full items-center justify-between gap-2', {
                            'bg-background-secondary': isSelected,
                            'cursor-not-allowed': props.disabled,
                          })}
                        >
                          {option.label}
                          {isSelected ? <CheckIcon className="w-4 text-brand-600" /> : null}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </PopperContent>
            </Portal>
          )}
        </PopperRoot>
      </CommandPrimitive>
    </div>
  );
};

export const Autocomplete = forwardRef(AutocompleteComponent) as <T extends boolean = false>(
  p: AutocompleteProps<T> & { ref?: Ref<ElementRef<'input'>> }
) => ReactElement;
