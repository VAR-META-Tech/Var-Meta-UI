import {
  MinimalPagination,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  type TableProps,
  TableRow,
} from '@hashgraph/ui';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    header: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    header: true,
  },
};

export default meta;

const DefaultTemplate: StoryFn<TableProps> = ({ header, ...args }) => {
  return (
    <Table
      header={
        header ? (
          <div className="">
            <div className="text-lg text-gray-900 font-semibold">Team members</div>
          </div>
        ) : null
      }
      {...args}
    >
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>

      <TableCaption>
        <MinimalPagination total={10} />
      </TableCaption>
    </Table>
  );
};

export const Default: StoryFn<typeof Table> = DefaultTemplate.bind({});
