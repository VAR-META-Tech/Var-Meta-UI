import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { HomeLineIcon } from '@var-meta/icons';
import { BreadcrumbItem, Breadcrumbs, type BreadcrumbItemProps } from '@var-meta/ui';

import { EnhancedView } from '@/components/View';

const meta: Meta = {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbItem,
  args: {
    withLine: false,
  },
};

export default meta;

const DefaultTemplate: StoryFn<BreadcrumbItemProps> = ({ withLine, ...args }: any) => {
  return (
    <EnhancedView prop="Default">
      <div className="p-4">
        <Breadcrumbs withLine={withLine}>
          <BreadcrumbItem {...args} iconOnly>
            <HomeLineIcon className="h-5 w-5" />
          </BreadcrumbItem>
          <BreadcrumbItem {...args}>Settings</BreadcrumbItem>
          <BreadcrumbItem disabled {...args}>
            ...
          </BreadcrumbItem>
          <BreadcrumbItem {...args}>Team</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </EnhancedView>
  );
};

export const Default: StoryFn<typeof Breadcrumbs> = DefaultTemplate.bind({});
