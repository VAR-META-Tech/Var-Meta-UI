import * as React from 'react';
import { render } from '@testing-library/react';

import { Divider } from '../index';

describe('Divider', () => {
  it('should render correctly', () => {
    const wrapper = render(<Divider>Divider</Divider>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Divider ref={ref}>Divider</Divider>);

    expect(ref.current).not.toBeNull();
  });
});
