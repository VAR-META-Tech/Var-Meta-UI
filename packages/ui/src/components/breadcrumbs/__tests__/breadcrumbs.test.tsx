import * as React from 'react';
import { render } from '@testing-library/react';

import { PlusCircleIcon } from '../../icons';
import { BreadcrumbItem, Breadcrumbs } from '../index';

describe('Breadcrumbs', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Breadcrumbs>
        <BreadcrumbItem iconOnly>
          <PlusCircleIcon />
        </BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        <BreadcrumbItem disabled>...</BreadcrumbItem>
        <BreadcrumbItem>Team</BreadcrumbItem>
      </Breadcrumbs>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLOListElement>();

    render(
      <Breadcrumbs ref={ref}>
        <BreadcrumbItem iconOnly>
          <PlusCircleIcon />
        </BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        <BreadcrumbItem disabled>...</BreadcrumbItem>
        <BreadcrumbItem>Team</BreadcrumbItem>
      </Breadcrumbs>
    );

    expect(ref.current).not.toBeNull();
  });
});
