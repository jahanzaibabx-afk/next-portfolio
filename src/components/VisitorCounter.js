'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(null);
  const [degraded, setDegraded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadVisitors() {
      try {
        const response = await fetch('/api/visitors', {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Visitor request failed: ${response.status}`);
        }

        const data = await response.json();
        if (
          !Number.isInteger(data.visitors) ||
          typeof data.live !== 'boolean' ||
          (data.degraded !== undefined && typeof data.degraded !== 'boolean')
        ) {
          throw new Error('Visitor API returned an invalid response');
        }

        setVisitors(data.visitors);
        setDegraded(data.live === false || data.degraded === true);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        console.error('Unable to load visitor analytics.', error);
        setVisitors(0);
        setDegraded(true);
      }
    }

    loadVisitors();
    return () => controller.abort();
  }, []);

  return (
    <aside
      aria-label="Portfolio visitor analytics"
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-5 rounded-[2rem] bg-teal-400/[0.06] blur-2xl" />
      <div className="relative rounded-2xl border border-white/10 bg-[#10141b]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Portfolio analytics
            </p>
            <h2 className="mt-2 text-lg font-medium text-white">
              Total tracked visits
            </h2>
          </div>
          <span
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              degraded
                ? 'bg-amber-300/10 text-amber-300'
                : 'bg-emerald-300/10 text-emerald-300'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                degraded ? 'bg-amber-300' : 'animate-pulse bg-emerald-300'
              }`}
            />
            {degraded ? 'Degraded' : 'Connected'}
          </span>
        </div>
        <div aria-live="polite" className="mt-8 flex items-end gap-3">
          <span className="text-6xl font-semibold leading-none tracking-[-0.06em] text-white">
            {visitors ?? '…'}
          </span>
          <span className="pb-1.5 text-sm text-slate-500">
            {degraded ? 'Analytics unavailable' : 'recorded page visits'}
          </span>
        </div>
        <div className="mt-8 flex h-16 items-end gap-1.5" aria-hidden="true">
          {[32, 48, 38, 64, 44, 76, 55, 88, 60, 72, 49, 96, 68, 82, 58, 76, 100, 70].map(
            (height, index) => (
              <span
                className={`flex-1 rounded-t-sm ${
                  index === 16 ? 'bg-teal-300' : 'bg-teal-300/20'
                }`}
                key={index}
                style={{ height: `${height}%` }}
              />
            ),
          )}
        </div>
        <div className="mt-3 flex justify-between border-t border-white/[0.07] pt-4 text-[11px] text-slate-500">
          <span>Aggregate visits</span>
          <span>{degraded ? 'Storage unavailable' : 'Redis'}</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-6 hidden rounded-xl border border-white/10 bg-[#121820] px-4 py-3 shadow-xl sm:block">
        <span className="text-xs text-slate-400">Performance first</span>
        <p className="mt-1 text-sm font-medium text-white">
          Built for the edge <span className="text-teal-300">↗</span>
        </p>
      </div>
    </aside>
  );
}
