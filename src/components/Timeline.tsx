type Item = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
  tech: string[];
};

export function Timeline(props: { items: Item[] }) {
  return (
    <ol className="grid gap-3.5 list-none p-0 m-0">
      {props.items.map((it, index) => (
        <li
          key={it.period + it.title}
          className="grid grid-cols-[22px_1fr] gap-3"
        >
          <div
            className={
              index === props.items.length - 1
                ? 'relative'
                : "relative after:content-[''] after:absolute after:left-1.25 after:top-8.5 after:-bottom-2 after:w-0.5 after:bg-linear-to-b after:from-[rgba(124,92,255,0.35)] after:via-[rgba(45,226,230,0.18)] after:to-transparent after:opacity-85"
            }
            aria-hidden
          >
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-[#7c5cff] to-[#2de2e6] shadow-[0_0_25px_rgba(124,92,255,0.25)] mt-4.5" />
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/4 p-4 transition-all duration-200 hover:border-white/18 hover:bg-white/5">
            <div className="text-[15px] font-semibold text-white/92">
              {it.title} <span className="text-white/62">— {it.org}</span>
            </div>

            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
              {it.period}
            </div>

            <ul className="mt-3 space-y-1.5 pl-4.5 text-sm leading-[1.65] text-white/72">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-2 list-none p-0 m-0">
              {it.tech.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-2.5 py-1.5 text-[11px] text-white/62"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
