import { render } from '@testing-library/react';
import * as React from 'react';

import { DatePicker } from '../index';

describe('DatePicker', () => {
  it('should render correctly', () => {
    const wrapper = render(<DatePicker />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<DatePicker ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
