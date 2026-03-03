import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function CopyButton(props: { value: string; label: string }) {
  const [done, setDone] = useState(false);

  return (
    <Button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(props.value);
        setDone(true);
        window.setTimeout(() => setDone(false), 900);
      }}
    >
      {done ? 'copied' : props.label}
    </Button>
  );
}
