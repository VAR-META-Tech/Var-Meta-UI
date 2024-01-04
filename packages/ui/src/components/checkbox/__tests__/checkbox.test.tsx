import { render } from '@testing-library/react';
import * as React from 'react';

import { Checkbox } from '../index';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = render(<Checkbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Checkbox ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
