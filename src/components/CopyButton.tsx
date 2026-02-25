import { useState } from 'react'

export function CopyButton(props: { value: string; label: string }) {
  const [done, setDone] = useState(false)

  return (
    <button
      className={`btn ${done ? 'ok' : ''}`}
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(props.value)
        setDone(true)
        window.setTimeout(() => setDone(false), 900)
      }}
    >
      {done ? 'copied' : props.label}
    </button>
  )
}