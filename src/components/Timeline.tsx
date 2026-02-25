type Item = {
  period: string
  title: string
  org: string
  bullets: string[]
  tech: string[]
}

export function Timeline(props: { items: Item[] }) {
  return (
    <div className="timeline">
      {props.items.map((it) => (
        <div key={it.period + it.title} className="tItem">
          <div className="tRail" aria-hidden>
            <div className="tDot" />
          </div>

          <div className="tBody">
            <div className="tTop">
              <div className="tOrg">{it.org}</div>
              <div className="tPeriod mono">{it.period}</div>
            </div>

            <div className="tTitle">{it.title}</div>

            <ul className="tList">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="tTech">
              {it.tech.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}