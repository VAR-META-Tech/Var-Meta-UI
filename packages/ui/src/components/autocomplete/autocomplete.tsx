import { cn } from '@hashgraph/utils';
import { Portal } from '@radix-ui/react-portal';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { type KeyboardEvent, useCallback, useRef, useState } from 'react';

import { type Option } from '../../types';
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command';
import { Command as CommandPrimitive } from '../command/cmdk';
import { commandScore } from '../command/cmdk/command-score';
import { HelperText } from '../helper-text';
import { CheckIcon, SearchIcon } from '../icons';
import { type InputProps, inputVariants } from '../input/input';
import { Label } from '../label';
import { PopperContent, PopperRoot, PopperTrigger } from '../popper/popper';
import { Skeleton } from '../skeleton';
import { Tag } from '../tag';
import { VStack } from '../utility';

type TValue<T extends boolean> = T extends true ? string[] : string;

export interface AutocompleteProps<T extends boolean = false> extends InputProps {
  options: Option[];
  value?: TValue<T>;
  defaultValue?: TValue<T>;
  onValueChange?: (value: TValue<T>) => void;
  onInputChange?: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  open?: boolean;
  multiple?: T;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  label?: string;
  helperText?: string;
}

export const Autocomplete = <T extends boolean = false>(props: AutocompleteProps<T>) => {
  const {
    options = [],
    onValueChange,
    loading = false,
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
    label,
    helperText,
    ...etc
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleKeyDown = useCallback(
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
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value);
        if (optionToSelect) {
          handleNewValue(optionToSelect.value);
        }
      }

      if (event.key === 'Escape') {
        input.blur();
      }
    },
    [isOpen, options, setOpen, handleNewValue]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    if (!multiple) {
      setInputValue((selected ?? inputValue) as string);
    }
  }, [inputValue, multiple, selected, setOpen]);

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
    <div>
      {label && <Label>{label}</Label>}

      <CommandPrimitive filter={handleSearch} onKeyDown={handleKeyDown}>
        <PopperRoot>
          <PopperTrigger>
            <div
              className={cn(inputVariants({ variant, className, size: 'none' }), {
                'flex justify-start flex-wrap items-center gap-2': true,
                'focus-within:shadow-brand-xs': variant === 'default' || !variant,
                'focus-within:shadow-error-xs': variant === 'destructive',
                'shadow-xs cursor-not-allowed bg-gray-50 text-gray-500': props.disabled,
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
                ref={inputRef}
                value={inputValue}
                onValueChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setOpen(true)}
                prefix={<></>}
                className="w-0 min-w-[30px] h-full flex-1"
                wrapperClassName={cn('border-none p-0 flex-1', {
                  // 'h-10': size === 'sm',
                  // 'h-11': size === 'md',
                })}
                {...etc}
              />
              {suffix && (
                <div
                  className={cn('bg-base-white absolute right-[10px] top-1/2 -translate-y-1/2', {
                    'text-error-300': variant === 'destructive',
                  })}
                >
                  {suffix}
                </div>
              )}
            </div>
          </PopperTrigger>
          {isOpen && (
            <Portal asChild>
              <PopperContent
                data-state={isOpen ? 'open' : 'closed'}
                className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 mt-1"
              >
                <CommandList>
                  {loading ? (
                    <CommandPrimitive.Loading>
                      <VStack spacing={4} className="p-1">
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                        <Skeleton className="w-full h-8" />
                      </VStack>
                    </CommandPrimitive.Loading>
                  ) : (
                    <CommandEmpty>No Options</CommandEmpty>
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
                            'bg-gray-50': isSelected,
                            'cursor-not-allowed': props.disabled,
                          })}
                        >
                          {option.label}
                          {isSelected ? <CheckIcon className="w-4" /> : null}
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
      {helperText && <HelperText variant={props.disabled ? 'disabled' : variant}>{helperText}</HelperText>}
    </div>
  );
};
