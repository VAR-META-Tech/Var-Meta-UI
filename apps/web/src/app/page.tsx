'use client';

import { Button, toast } from '@var-ui/core';

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-2xl">
        <div className="font-serif font-semibold text-6xl">VAR UI</div>

        <Button onClick={() => toast.success('good ui')}>Show toast</Button>
      </main>
    </>
  );
}
