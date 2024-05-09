import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../../button';
import { ButtonGroup } from '../index';

describe('ButtonGroup', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <ButtonGroup ref={ref}>
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
    );

    expect(ref.current).not.toBeNull();
  });
});
