'use client';

import {
  Autocomplete,
  Button,
  HStack,
  Modal,
  ModalAction,
  ModalHeader,
  Select,
  toast,
  type AutocompleteProps,
} from '@var-meta/ui';

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
        <div className="text-md text-gray-600">@Kevin</div>
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
    value: 'Jenifer Chang',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="text-foreground text-md font-medium">Jenifer Chang</div>
        <div className="text-md text-gray-600">@Jenifer</div>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <>
      <main className="gap-2xl flex min-h-screen flex-col items-center justify-center">
        <div className="font-serif text-4xl font-semibold md:text-6xl">VAR UI</div>

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
              title="Blog post published"
              description="This blog post has been published. Team members will be able to edit this post and republish changes."
            />

            <div className="flex flex-col gap-3 px-4">
              <Autocomplete placeholder="Placeholder" options={options} />
              <Select
                fullWidth
                placeholder="Placeholder"
                options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
              />
            </div>
            <ModalAction>
              <Button onClick={() => toast.error('discard')} variant="outline" color="gray" fullWidth>
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
