import { render } from '@testing-library/react';
import * as React from 'react';

import { Button } from '../index';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button>Helloworld</Button>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Helloworld</Button>);

    expect(ref.current).not.toBeNull();
  });
});
