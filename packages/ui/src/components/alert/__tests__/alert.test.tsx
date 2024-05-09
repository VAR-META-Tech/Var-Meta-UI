import * as React from 'react';
import { render } from '@testing-library/react';

import { Alert } from '../index';

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = render(<Alert />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Alert ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
