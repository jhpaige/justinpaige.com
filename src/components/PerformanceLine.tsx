import { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';

type Datum = { t: number; v: number };

type Hover = {
  x: number;
  y: number;
  d: Datum;
};

export function PerformanceLine({
  height = 260,
  title = 'Company performance',
  subtitle = "Correlation between Justin's tenure and company value ;)",
  className,
}: {
  height?: number | 'fill';
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const [hover, setHover] = useState<Hover | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const data: Datum[] = useMemo(() => {
    const btc = [
      { date: '2022-11-21', price: 15787.28 },
      { date: '2022-12-31', price: 16547.5 },
      { date: '2023-01-14', price: 20853.0 },
      { date: '2023-01-21', price: 23199.0 },
      { date: '2023-02-16', price: 25156.0 },
      { date: '2023-03-10', price: 20000.0 },
      { date: '2023-03-17', price: 26868.39 },
      { date: '2023-06-23', price: 31000.0 },
      { date: '2023-10-23', price: 34000.0 },
      { date: '2023-12-05', price: 44000.0 },
      { date: '2024-01-01', price: 45001.01 },
      { date: '2024-03-04', price: 68000.0 },
      { date: '2024-03-13', price: 73664.0 },
    ];

    let runMax = 0;
    const monotone = btc.map((p) => {
      runMax = Math.max(runMax, p.price);
      return { date: p.date, price: runMax };
    });

    const max = monotone[monotone.length - 1]?.price ?? 1;

    return monotone.map((p, i) => ({
      t: i / (monotone.length - 1),
      v: p.price / max,
    }));
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const svgEl = svgRef.current;
    const wrapEl = wrapRef.current;
    if (!svgEl || !wrapEl) return;

    const svg = d3.select(svgEl);

    let ro: ResizeObserver | null = null;

    const render = (w?: number, h?: number) => {
      const rect = wrapEl.getBoundingClientRect();
      const measuredWidth = Math.max(1, Math.floor(w ?? rect.width));
      const measuredHeight =
        height === 'fill'
          ? Math.max(1, Math.floor(h ?? rect.height))
          : Math.max(
              1,
              Math.floor(typeof height === 'number' ? height : rect.height),
            );

      setContainerWidth((prev) =>
        prev === measuredWidth ? prev : measuredWidth,
      );

      svg.selectAll('*').remove();

      svg.attr('viewBox', `0 0 ${measuredWidth} ${measuredHeight}`);
      svg.attr('preserveAspectRatio', 'xMidYMid meet');
      svg.attr('width', measuredWidth);
      svg.attr('height', measuredHeight);

      const margin = { top: 46, right: 16, bottom: 50, left: 60 };
      const innerW = measuredWidth - margin.left - margin.right;
      const innerH = measuredHeight - margin.top - margin.bottom;

      if (innerW <= 0 || innerH <= 0) return;

      const g = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleLinear<number, number>()
        .domain([0, 1])
        .range([0, innerW]);

      const y = d3
        .scaleLinear<number, number>()
        .domain([0, 1])
        .range([innerH, 0]);

      const bottomAxis = d3
        .axisBottom<number>(x)
        .ticks(5)
        .tickFormat((d: d3.NumberValue) => `${Math.round(+d * 100)}%`);

      g.append('g')
        .attr('transform', `translate(0,${innerH})`)
        .call(bottomAxis)
        .selectAll('text')
        .attr('fill', 'rgba(255,255,255,0.7)');

      const leftAxis = d3
        .axisLeft<number>(y)
        .ticks(5)
        .tickFormat((d: d3.NumberValue) => `${Math.round(+d * 100)}%`);

      g.append('g')
        .call(leftAxis)
        .selectAll('text')
        .attr('fill', 'rgba(255,255,255,0.7)');

      g.append('text')
        .attr('x', innerW / 2)
        .attr('y', innerH + 40)
        .attr('text-anchor', 'middle')
        .attr('fill', 'rgba(255,255,255,0.75)')
        .attr('font-size', 12)
        .text('Time I was there');

      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerH / 2)
        .attr('y', -44)
        .attr('text-anchor', 'middle')
        .attr('fill', 'rgba(255,255,255,0.75)')
        .attr('font-size', 12)
        .text('Company performance (index)');

      const area = d3
        .area<Datum>()
        .x((d) => x(d.t))
        .y0(innerH)
        .y1((d) => y(d.v))
        .curve(d3.curveCatmullRom.alpha(0.6));

      g.append('path')
        .datum(data)
        .attr('d', area)
        .attr('fill', 'rgba(45,226,230,0.08)');

      const line = d3
        .line<Datum>()
        .x((d) => x(d.t))
        .y((d) => y(d.v))
        .curve(d3.curveCatmullRom.alpha(0.6));

      g.append('path')
        .datum(data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(124,92,255,0.95)')
        .attr('stroke-width', 2.8);

      g.append('path')
        .datum(data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(45,226,230,0.65)')
        .attr('stroke-width', 7)
        .attr('opacity', 0.2);

      const overlay = g
        .append('rect')
        .attr('width', innerW)
        .attr('height', innerH)
        .attr('fill', 'transparent')
        .style('cursor', 'crosshair')
        .style('touch-action', 'none');

      const overlayNode = overlay.node();
      if (!overlayNode) return;

      const bisect = d3.bisector<Datum, number>((d) => d.t).left;

      const setHoverFromX = (mx: number) => {
        const t = x.invert(mx);
        const i = Math.min(data.length - 1, Math.max(1, bisect(data, t)));
        const d0 = data[i - 1];
        const d1 = data[i];

        const span = d1.t - d0.t || 1;
        const k = (t - d0.t) / span;
        const v = d0.v + (d1.v - d0.v) * k;

        const clampedT = Math.max(0, Math.min(1, t));

        if (!mountedRef.current) return;

        setHover({
          x: margin.left + x(clampedT),
          y: margin.top + y(v),
          d: { t: clampedT, v },
        });
      };

      overlay
        .on('mousemove', (event: MouseEvent) => {
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            const [mx] = d3.pointer(event, overlayNode);
            setHoverFromX(mx);
          });
        })
        .on('mouseleave', () => {
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
          if (mountedRef.current) setHover(null);
        });

      overlay
        .on('touchstart', (event: TouchEvent) => {
          const tt = event.touches[0];
          if (!tt) return;
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            const [mx] = d3.pointer(tt, overlayNode);
            setHoverFromX(mx);
          });
        })
        .on('touchmove', (event: TouchEvent) => {
          const tt = event.touches[0];
          if (!tt) return;
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            const [mx] = d3.pointer(tt, overlayNode);
            setHoverFromX(mx);
          });
        })
        .on('touchend', () => {
          if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
          if (mountedRef.current) setHover(null);
        });

      svg
        .append('text')
        .attr('x', margin.left)
        .attr('y', 18)
        .attr('font-size', 14)
        .attr('font-weight', 650)
        .attr('fill', 'rgba(255,255,255,0.92)')
        .text(title);

      svg
        .append('text')
        .attr('x', margin.left)
        .attr('y', 34)
        .attr('font-size', 11)
        .attr('fill', 'rgba(255,255,255,0.72)')
        .text(subtitle);
    };

    const schedule = (w?: number, h?: number) => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);

      if (mountedRef.current) setHover(null);

      rafRef.current = requestAnimationFrame(() => render(w, h));
    };

    schedule();

    ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const cr = entry.contentRect;
      schedule(cr.width, cr.height);
    });

    ro.observe(wrapEl);

    return () => {
      if (ro) ro.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [data, height, subtitle, title]);

  const tooltipLeft = hover
    ? Math.max(0, Math.min(hover.x + 12, Math.max(0, containerWidth - 190)))
    : 0;

  const tooltipTop = hover ? Math.max(hover.y - 44, 52) : 0;

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        width: '100%',
        height: height === 'fill' ? '100%' : undefined,
        minHeight: height === 'fill' ? 1 : undefined,
        position: 'relative',
      }}
    >
      <svg
        ref={svgRef}
        style={{
          width: '100%',
          height: height === 'fill' ? '100%' : `${height}px`,
          display: 'block',
        }}
      />

      {hover && (
        <>
          <div
            style={{
              position: 'absolute',
              left: `${hover.x}px`,
              top: `${hover.y}px`,
              width: 12,
              height: 12,
              borderRadius: 999,
              background:
                'radial-gradient(circle at center, rgba(45,226,230,0.95) 0%, rgba(45,226,230,0.35) 40%, rgba(124,92,255,0.25) 65%, rgba(124,92,255,0.0) 75%)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 0 0 3px rgba(124,92,255,0.16)',
              transform: 'translate(-6px,-6px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              left: `${tooltipLeft}px`,
              top: `${tooltipTop}px`,
              width: 180,
              padding: '10px',
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(8,8,12,0.55)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              color: 'rgba(255,255,255,0.92)',
              pointerEvents: 'none',
              fontSize: 12,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(255,255,255,0.72)' }}>Time</span>
              <span
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                {Math.round(hover.d.t * 100)}%
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.72)' }}>
                Performance
              </span>
              <span
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                {Math.round(hover.d.v * 100)}%
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
