import * as React from 'react';
import { render } from '@testing-library/react';

import { Dot } from '../index';

describe('Dot', () => {
  it('should render correctly', () => {
    const wrapper = render(<Dot />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Dot ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
