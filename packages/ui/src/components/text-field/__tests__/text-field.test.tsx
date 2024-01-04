import { render } from '@testing-library/react';
import * as React from 'react';

import { TextField } from '../index';

describe('TextField', () => {
  it('should render correctly', () => {
    const wrapper = render(<TextField />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<TextField ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
