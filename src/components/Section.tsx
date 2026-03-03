import type { ReactNode } from 'react';

export function Section(props: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={props.id} className="py-10.5 px-5 scroll-mt-10.5">
      <div className="max-w-280 mx-auto">
        <div className="flex items-center gap-3.5 mb-4">
          <h2 className="m-0 text-lg tracking-widest uppercase text-white/78">
            {props.title}
          </h2>
          <div
            className="h-px flex-1 bg-linear-to-r from-[rgba(124,92,255,0.35)] via-[rgba(45,226,230,0.18)] to-transparent"
            aria-hidden
          />
        </div>
        {props.children}
      </div>
    </section>
  );
}
