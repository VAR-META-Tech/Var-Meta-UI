import { CircleIcon, SearchLgIcon } from '@hashgraph/icons';
import { Button, type ButtonProps } from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { EnhancedView, View, ViewGroup } from '@/components/View';

const variants: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'secondary-gray',
  'tertiary',
  'tertiary-gray',

  'destructive',
  'destructive-secondary',
  'destructive-tertiary',
  'destructive-link',

  'warning',
  'warning-secondary',
  'warning-tertiary',
  'warning-link',

  'success',
  'success-secondary',
  'success-tertiary',
  'success-link',
];
const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg', 'xl', '2xl'];
const radiuses: ButtonProps['radius'][] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    dotLeading: {
      control: { type: 'boolean' },
    },
    iconOnly: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default meta;

const DefaultTemplate: StoryFn<ButtonProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Button {...args}>{args.iconOnly ? <CircleIcon /> : 'Button CTA'}</Button>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Button> = DefaultTemplate.bind({});

const VariantTemplate: StoryFn<ButtonProps> = (args) => {
  const items = variants.map((variant) => (
    <React.Fragment key={variant}>
      <View prop="variant" value={variant}>
        <Button {...args} key={variant} variant={variant} className="capitalize">
          {variant}
        </Button>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Variant: StoryFn<typeof Button> = VariantTemplate.bind({});

const StatesTemplate: StoryFn<ButtonProps> = (args) => {
  const disabledItems = (
    <>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} className="capitalize" disabled>
          {variant}
        </Button>
      ))}
    </>
  );

  const loadingItems = (
    <>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} {...args} className="capitalize" loading></Button>
      ))}
    </>
  );

  return (
    <ViewGroup>
      <View prop="disabled" value={'true'} direction="row">
        {disabledItems}
      </View>
      <View prop="loading" value={'true'} direction="row">
        {loadingItems}
      </View>
    </ViewGroup>
  );
};

export const States: StoryFn<typeof Button> = StatesTemplate.bind({});

const IconsTemplate: StoryFn<ButtonProps> = (args) => {
  return (
    <View prop="iconOnly" justify="start" value="true">
      {variants.map((variant) =>
        sizes.map((size) => (
          <React.Fragment key={size + variant}>
            <Button {...args} iconOnly key={size} variant={variant} size={size} className="capitalize">
              <SearchLgIcon />
            </Button>
          </React.Fragment>
        ))
      )}
    </View>
  );
};

export const WithIcon: StoryFn<typeof Button> = IconsTemplate.bind({});

const WithDotLeadingTemplate: StoryFn<ButtonProps> = (args) => {
  return (
    <View prop="iconOnly" justify="start" value="true">
      {variants.map((variant) =>
        sizes.map((size) => (
          <React.Fragment key={size + variant}>
            <Button {...args} dotLeading key={size} variant={variant} size={size} className="capitalize">
              {variant}
            </Button>
          </React.Fragment>
        ))
      )}
    </View>
  );
};

export const WithDotLeading: StoryFn<typeof Button> = WithDotLeadingTemplate.bind({});
