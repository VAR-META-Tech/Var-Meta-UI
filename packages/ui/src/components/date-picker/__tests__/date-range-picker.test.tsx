import { render } from '@testing-library/react';
import * as React from 'react';

import { DateRangePicker } from '../index';

describe('DateRangePicker', () => {
  it('should render correctly', () => {
    const wrapper = render(<DateRangePicker />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<DateRangePicker ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
