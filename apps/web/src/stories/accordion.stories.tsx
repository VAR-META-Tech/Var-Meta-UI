import type { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, type AccordionProps, AccordionTrigger } from '@var-ui/core';
import React from 'react';

import { EnhancedView } from '@/components/View';
const sizes: AccordionProps['size'][] = ['sm', 'md', 'lg'];
const variants: AccordionProps['variant'][] = ['default', 'outline', 'solid'];
const roundeds: AccordionProps['rounded'][] = ['default', 'sm', 'md', 'lg'];

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    divider: {
      control: {
        type: 'boolean',
      },
    },
    singleIndicator: {
      control: {
        type: 'boolean',
      },
    },
    hideIcon: {
      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: sizes,
      control: {
        type: 'radio',
      },
    },
    variant: {
      options: variants,
      control: {
        type: 'radio',
      },
    },
    rounded: {
      options: roundeds,
      control: {
        type: 'radio',
      },
    },
    type: {
      options: ['single', 'multiple'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    hideIcon: false,
    divider: false,
    iconPosition: 'right',
    type: 'multiple',
    size: 'md',
    rounded: 'md',
  },
};

export default meta;

const data = [
  {
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
  },
  {
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },
  {
    title: 'Can other info be added to an invoice?',
    content:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
];

const DefaultTemplate: StoryFn<AccordionProps> = ({ ...args }) => {
  return (
    <EnhancedView prop="Default">
      <div className="">
        <Accordion className="w-full p-6" {...args}>
          {data.map((x, i) => (
            <AccordionItem key={i} value={`${i}`}>
              <AccordionTrigger>{x.title}</AccordionTrigger>
              <AccordionContent>{x.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Accordion> = DefaultTemplate.bind({});
