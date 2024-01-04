// write unit test for avatar-group components
import { render, type RenderResult } from '@testing-library/react';
import React from 'react';

import { Avatar } from '../avatar';
import { AvatarGroup } from '../avatar-group';

describe('AvatarGroup', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <AvatarGroup>
        {Array.from({ length: 10 }, (_, i) => (
          <Avatar key={i} src={`https://i.pravatar.cc/1080?img=${i + 1}`}>
            {i}
          </Avatar>
        ))}
      </AvatarGroup>
    );
  });

  it('should render correctly', () => {
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <AvatarGroup ref={ref}>
        {Array.from({ length: 10 }, (_, i) => (
          <Avatar id="avt-item" key={i} src={`https://i.pravatar.cc/1080?img=${i + 1}`}>
            {i}
          </Avatar>
        ))}
      </AvatarGroup>
    );
    expect(ref.current).not.toBeNull();
  });
});
