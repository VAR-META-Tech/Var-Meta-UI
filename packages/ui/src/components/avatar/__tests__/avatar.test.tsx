import { render } from '@testing-library/react';
import * as React from 'react';

import { Avatar } from '../avatar';

describe('Avatar', () => {
  it('should render correctly', () => {
    const wrapper = render(<Avatar />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should populate imgRef', () => {
    const imgRef = React.createRef<HTMLImageElement>();
    const wrapper = render(<Avatar imgRef={imgRef} src="https://i.pravatar.cc/300?u=a042581f4e29026705d" />);
    setTimeout(() => expect(imgRef.current).not.toBeNull(), 500);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should render initials', () => {
    const { container } = render(<Avatar>Junior</Avatar>);

    expect(container.querySelector('span')).toHaveTextContent('Jun');
  });
});
