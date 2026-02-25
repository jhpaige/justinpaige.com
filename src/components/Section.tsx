// src/components/Section.tsx
import type { ReactNode } from 'react'

export function Section(props: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={props.id} className="section">
      <div className="sectionInner">
        <div className="sectionHead">
          <h2 className="h2">{props.title}</h2>
          <div className="rule" aria-hidden />
        </div>
        {props.children}
      </div>
    </section>
  )
}