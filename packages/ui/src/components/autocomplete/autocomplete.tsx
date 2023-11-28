/* eslint-disable no-extra-boolean-cast */

'use client';

import { cn } from '@hashgraph/utils';
import { Command as CommandPrimitive } from 'cmdk';
import { type KeyboardEvent, type ReactNode, useCallback, useRef, useState } from 'react';
import { setTimeout } from 'timers';

import { usePopover } from '../../hooks';
import { type Option } from '../../types';
import { CommandGroup, CommandInput, CommandItem, CommandList } from '../command';
import { CheckIcon } from '../icons';
import { type InputProps, inputVariants } from '../input/input';
import { Skeleton } from '../skeleton';
import { VStack } from '../utility';

export interface AutoCompleteProps extends InputProps {
  options: Option[];
  value?: string;
  onValueChange?: (value: string) => void;
  onInputChange?: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  suffix?: ReactNode;
  name?: string;
}

export const AutoComplete = ({
  options,
  value,
  onValueChange,
  loading = false,
  suffix,
  onInputChange,
  variant,
  size,
  className,
  icon,
  ...props
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, floatingStyles, refs, { open, close }] = usePopover();

  const [selected, setSelected] = useState<string>(value ?? '');
  const [inputValue, setInputValue] = useState<string>(value ?? '');

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        open();
      }

      // This is not a default behavior of the <input /> field
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value);
        if (optionToSelect) {
          setSelected(optionToSelect.value);
          onValueChange?.(optionToSelect.value);
        }
      }

      if (event.key === 'Escape') {
        input.blur();
      }
    },
    [isOpen, open, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    close();
    setInputValue(selected ?? inputValue);
  }, [close, inputValue, selected]);

  const handleSelectOption = useCallback(
    (selectedValue: string) => {
      setInputValue(selectedValue);
      setSelected(selectedValue);
      onValueChange?.(selectedValue);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange]
  );

  const handleChange = (val: string) => {
    onInputChange?.(val);
    setInputValue(val);
  };

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div ref={refs.setReference} className="relative">
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={handleChange}
          onBlur={handleBlur}
          onFocus={open}
          icon={icon}
          wrapperClassName={cn(inputVariants({ variant, size, className }), {
            'focus-within:shadow-brand-xs': variant === 'default' || !variant,
            'focus-within:shadow-error-xs': variant === 'destructive',
            'disabled:shadow-xs disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500': props.disabled,
          })}
          {...props}
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
      <div className="relative mt-1">
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(
            'bg-base-white z-50 min-h-[40px] w-full rounded-sm shadow-md',
            isOpen ? 'visible' : 'invisible'
          )}
        >
          <CommandList>
            {loading ? (
              <CommandPrimitive.Loading>
                <VStack spacing={4} className="p-1">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </VStack>
              </CommandPrimitive.Loading>
            ) : null}

            <CommandGroup>
              {(loading ? [] : options).map((option) => {
                const isSelected = selected === option.value;
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onSelect={() => handleSelectOption(option.value)}
                    className={cn('flex w-full items-center gap-2', !isSelected ? 'pl-8' : null)}
                  >
                    {isSelected ? <CheckIcon className="w-4" /> : null}
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
