import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../../button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../index';

describe('Drawer', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Drawer>
        <DrawerTrigger>Trigger</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer title</DrawerTitle>
            <DrawerDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti ducimus amet nihil error eum? Eum
              alias unde voluptate nisi, dolorem suscipit ullam molestiae nobis? Deserunt voluptatibus facere in
              praesentium!
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button type="submit">Save changes</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
