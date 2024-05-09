import * as React from 'react';
import { render } from '@testing-library/react';

import { CircularProgress } from '../index';

describe('CircularProgress', () => {
  it('should render correctly', () => {
    const wrapper = render(<CircularProgress />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<CircularProgress ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
