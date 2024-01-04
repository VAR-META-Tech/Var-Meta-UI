import { render } from '@testing-library/react';
import * as React from 'react';

import { Button } from '../../button';
import { Modal, ModalAction, ModalHeader } from '../index';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Modal trigger={<Button>Show Modal</Button>}>
        <ModalHeader title="Tilte" description="description" />
        <ModalAction>
          <Button variant="secondary-gray" fullWidth>
            Discard
          </Button>
          <Button fullWidth>Save changes</Button>
        </ModalAction>
      </Modal>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
