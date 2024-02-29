'use client';

import {
  AlertCircleIcon,
  Autocomplete,
  type AutocompleteProps,
  Button,
  FeaturedIcon,
  HStack,
  Modal,
  ModalAction,
  ModalHeader,
  Select,
  toast,
} from '@var-ui/core';

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

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-2xl">
        <div className="font-serif font-semibold text-4xl md:text-6xl">VAR UI</div>

        <HStack
          className="w-full"
          pos={{
            initial: 'center',
            lg: 'apart',
            sm: 'around',
          }}
        >
          <Button onClick={() => toast.success('Good UI')}>Show toast</Button>
          <Button onClick={() => toast.success('Good UI')}>Show toast</Button>
        </HStack>
        <div className="flex gap-4">
          <Modal trigger={<Button>Show Modal</Button>}>
            <ModalHeader
              icon={
                <FeaturedIcon variant="outline" color="brand" size="md">
                  <AlertCircleIcon />
                </FeaturedIcon>
              }
              title="Blog post published"
              description="This blog post has been published. Team members will be able to edit this post and republish changes."
            />

            <div className="px-4 flex flex-col gap-3">
              <Autocomplete placeholder="Placeholder" options={options} />
              <Select
                fullWidth
                placeholder="Placeholder"
                options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
              />
            </div>
            <ModalAction>
              <Button onClick={() => toast.error('discard')} variant="secondary-gray" fullWidth>
                Discard
              </Button>
              <Button onClick={() => toast.error('error')} fullWidth>
                Save changes
              </Button>
            </ModalAction>
          </Modal>
        </div>
      </main>
    </>
  );
}
