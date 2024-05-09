import * as React from 'react';
import { render } from '@testing-library/react';

import { Textarea } from '../index';

describe('Textarea', () => {
  it('should render correctly', () => {
    const wrapper = render(<Textarea />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
