'use client';

import { Button, toast } from '@var-meta/ui';

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-2xl">
        <div className="font-serif font-semibold text-display-2xl">Welcome to Hashgraph UI</div>

        <Button onClick={() => toast.success('good ui')}>Show toast</Button>
      </main>
    </>
  );
}
