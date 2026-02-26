type Item = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
  tech: string[];
};

export function Timeline(props: { items: Item[] }) {
  return (
    <div className="grid gap-3">
      {props.items.map((it) => (
        <div
          key={it.period + it.title}
          className="grid grid-cols-[22px_1fr] gap-3"
        >
          <div
            className="relative after:content-[''] after:absolute after:left-1.25 after:top-8.5 after:bottom-[-8px] after:w-0.5 after:bg-linear-to-b after:from-[rgba(124,92,255,0.35)] after:via-[rgba(45,226,230,0.18)] after:to-transparent after:opacity-85"
            aria-hidden
          >
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-[#7c5cff] to-[#2de2e6] shadow-[0_0_25px_rgba(124,92,255,0.25)] mt-4.5" />
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/4 p-3.5">
            <div className="flex justify-between items-baseline gap-2.5">
              <div className="font-bold">{it.org}</div>
              <div className="font-mono text-white/60 text-xs">{it.period}</div>
            </div>

            <div className="mt-1.5 text-white/82 font-semibold">{it.title}</div>

            <ul className="my-2.5 ml-4.5 text-white/70 leading-[1.6] text-sm">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {it.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-2.5 py-1.5 rounded-full border border-white/12 bg-white/4 text-xs text-white/82"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
