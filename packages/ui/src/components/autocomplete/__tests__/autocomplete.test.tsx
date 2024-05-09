import * as React from 'react';
import { render } from '@testing-library/react';

import { Autocomplete, type AutocompleteProps } from '../index';

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-md text-gray-600">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Henry',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="text-foreground text-md font-medium">Henry</div>
        <div className="text-md text-gray-600">@Henry</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="text-foreground text-md font-medium">Kevin Baker</div>
        <div className="text-md text-gray-600">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Josh William',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="text-foreground text-md font-medium">Josh William</div>
        <div className="text-md text-gray-600">@William</div>
      </div>
    ),
  },

  {
    value: 'Gaba',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="text-foreground text-md font-medium">Jenifer Change</div>
        <div className="text-md text-gray-600">@gaba</div>
      </div>
    ),
  },
];

describe('Autocomplete', () => {
  it('should render correctly', () => {
    const wrapper = render(<Autocomplete placeholder="Placeholder" options={options} />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Autocomplete placeholder="Placeholder" options={options} ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
