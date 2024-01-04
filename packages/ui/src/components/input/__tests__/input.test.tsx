import { render } from '@testing-library/react';
import * as React from 'react';

import { Input } from '../index';

describe('Input', () => {
  it('should render correctly', () => {
    const wrapper = render(<Input />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Input ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
