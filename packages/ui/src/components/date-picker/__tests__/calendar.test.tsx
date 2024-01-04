import { render } from '@testing-library/react';
import * as React from 'react';

import { Calendar } from '../index';

describe('Calendar', () => {
  it('should render correctly', () => {
    const wrapper = render(<Calendar />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
