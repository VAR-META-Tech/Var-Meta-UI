import * as React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../index';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(<Label>Label</Label>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLLabelElement>();

    render(<Label ref={ref}>Label</Label>);

    expect(ref.current).not.toBeNull();
  });
});
