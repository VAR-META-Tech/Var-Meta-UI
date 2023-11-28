'use client';

import { Autocomplete } from '@hashgraph/ui';

export default function Page() {
  return (
    <main className="gap-2xl flex min-h-screen flex-col items-center justify-center">
      <div className="text-display-2xl font-serif font-semibold">Welcome to Hashgraph UI</div>

      <div className="w-full max-w-xl">
        <Autocomplete
          size="md"
          placeholder="Search"
          options={[
            {
              value: '1',
              label: (
                <div className="flex gap-2">
                  <img className="rounded-full" src="https://i.pravatar.cc/24?img=1" />
                  <div className="text-md font-medium text-gray-900">Phoenix Baker</div>
                  <div className="text-md text-gray-600">@phoenix</div>
                </div>
              ),
              searchValue: 'Phoenix Baker',
            },
            {
              value: '2',
              label: (
                <div className="flex gap-2">
                  <img className="rounded-full" src="https://i.pravatar.cc/24?img=2" />
                  <div className="text-md font-medium text-gray-900">Jerome</div>
                  <div className="text-md text-gray-600">@Jerome</div>
                </div>
              ),
              searchValue: 'Jerome',
            },
            {
              value: '3',
              label: (
                <div className="flex gap-2">
                  <img className="rounded-full" src="https://i.pravatar.cc/24?img=3" />
                  <div className="text-md font-medium text-gray-900">Kevin Baker</div>
                  <div className="text-md text-gray-600">@phoenix</div>
                </div>
              ),
              searchValue: 'Kevin Baker',
            },
          ]}
        />
      </div>
    </main>
  );
}
