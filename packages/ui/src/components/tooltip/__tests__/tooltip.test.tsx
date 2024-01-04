import { render } from '@testing-library/react';
import * as React from 'react';

import { Tooltip, TooltipProvider } from '../index';

describe('Tooltip', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <TooltipProvider>
        <Tooltip title="Title" content="content">
          Hello
        </Tooltip>
      </TooltipProvider>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
