'use client';

import { Autocomplete } from '@hashgraph/ui';
import { useState } from 'react';

const options = [
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

export default function Page() {
  const [state, setState] = useState<string>();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-2xl">
      <div className="font-serif font-semibold text-display-2xl">Welcome to Hashgraph UI</div>

      <div className="w-full max-w-xxs">
        {state}
        <Autocomplete size="md" value={state} onValueChange={setState} placeholder="Search" options={options} />
      </div>
    </main>
  );
}
