'use client';

import { Button, toast, Toaster } from '@hashgraph/ui';

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-2xl">
        <div className="font-serif font-semibold text-display-2xl">Welcome to Hashgraph UI</div>

        <div className="flex flex-col w-full mx-auto max-w-xxs">
          <Button
            fullWidth
            onClick={() =>
              toast.image('We’ve just released a new update!', {
                src: 'https://images.pexels.com/photos/17485678/pexels-photo-17485678/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png',
                description: 'Check out the all new dashboard view. Pages and exports now load faster.',
              })
            }
          >
            Show Toast
          </Button>
        </div>
      </main>

      <Toaster duration={50000000} />
    </>
  );
}
