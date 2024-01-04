import { render } from '@testing-library/react';
import * as React from 'react';

import { ButtonClose } from '../index';

describe('ButtonClose', () => {
  it('should render correctly', () => {
    const wrapper = render(<ButtonClose>Helloworld</ButtonClose>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<ButtonClose ref={ref}>Helloworld</ButtonClose>);

    expect(ref.current).not.toBeNull();
  });
});
