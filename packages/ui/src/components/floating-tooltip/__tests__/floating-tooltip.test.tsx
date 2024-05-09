import * as React from 'react';
import { render } from '@testing-library/react';

import { FloatingTooltip } from '../index';

describe('FloatingTooltip', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <FloatingTooltip title="Title" content="content">
        <div style={{ width: 300, height: 300, background: '#f5f5f5' }} />
      </FloatingTooltip>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <FloatingTooltip ref={ref} title="Title" content="content">
        <div style={{ width: 300, height: 300, background: '#f5f5f5' }} />
      </FloatingTooltip>
    );

    expect(ref.current).not.toBeNull();
  });
});
