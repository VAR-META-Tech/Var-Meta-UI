import { render } from '@testing-library/react';
import * as React from 'react';

import { Badge } from '../index';

describe('Badge', () => {
  it('should render correctly', () => {
    const wrapper = render(<Badge>Hi</Badge>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Badge ref={ref}>Hi</Badge>);

    expect(ref.current).not.toBeNull();
  });
});
