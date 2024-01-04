import { render } from '@testing-library/react';
import * as React from 'react';

import { HalfCircularProgress } from '../index';

describe('HalfCircularProgress', () => {
  it('should render correctly', () => {
    const wrapper = render(<HalfCircularProgress />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<HalfCircularProgress ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
