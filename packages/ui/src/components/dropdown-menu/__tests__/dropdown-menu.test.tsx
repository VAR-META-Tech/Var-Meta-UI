import * as React from 'react';
import { render } from '@testing-library/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../index';

const contentGroup = (
  <DropdownMenuGroup>
    <DropdownMenuItem>
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <span>Billing</span>
      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <span>Settings</span>
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <span>Keyboard shortcuts</span>
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuGroup>
);

describe('Divider', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Account</DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Account menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {contentGroup}
          <DropdownMenuSeparator />
          {contentGroup}
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
