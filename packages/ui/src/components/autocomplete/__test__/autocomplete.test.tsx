import { render } from '@testing-library/react';
import * as React from 'react';

import { Autocomplete, type AutocompleteProps } from '../index';

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="font-medium text-gray-900 text-md">Phoenix Baker</div>
        <div className="text-gray-600 text-md">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Jerome',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="font-medium text-gray-900 text-md">Jerome</div>
        <div className="text-gray-600 text-md">@Jerome</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="font-medium text-gray-900 text-md">Kevin Baker</div>
        <div className="text-gray-600 text-md">@kevin</div>
      </div>
    ),
  },
  {
    value: 'Kent',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="font-medium text-gray-900 text-md">Kent</div>
        <div className="text-gray-600 text-md">kent</div>
      </div>
    ),
  },

  {
    value: 'Gaba',
    label: (
      <div className="flex gap-2">
        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="font-medium text-gray-900 text-md">Gaba Gaba</div>
        <div className="text-gray-600 text-md">@gaba</div>
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
