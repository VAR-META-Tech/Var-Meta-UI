import { render } from '@testing-library/react';
import * as React from 'react';

import { Toggle } from '../index';

describe('Toggle', () => {
  it('should render correctly', () => {
    const wrapper = render(<Toggle />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Toggle ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
