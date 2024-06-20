import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../../button';
import { Modal } from '../index';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header title="Tilte" description="description" />
        <Modal.Action>
          <Button variant="link" fullWidth>
            Discard
          </Button>
          <Button fullWidth>Save changes</Button>
        </Modal.Action>
      </Modal>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
