import type { ReactNode } from "react";

export default function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-40 sm:px-10 sm:pb-28 sm:pt-52">
      <svg aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-48 top-10 h-[620px] w-[620px] text-[#E52432] opacity-40">
        {[80, 150, 220, 290].map((r) => <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="currentColor" strokeDasharray={r % 20 ? "3 8" : undefined} />)}
      </svg>
      <div className="relative mx-auto max-w-[1400px]">
        <p className="vr-rise font-mono text-[11px] uppercase tracking-[0.14em] text-[#E52432]">{kicker}</p>
        <h1 className="vr-rise mt-5 max-w-5xl text-[clamp(2.75rem,8.5vw,8rem)] font-black leading-[0.9] tracking-[-0.06em]" style={{ animationDelay: "0.1s" }}>{title}</h1>
        <div className="vr-line mt-10 h-px w-full max-w-md bg-[#E52432]" style={{ animationDelay: "0.4s" }} />
        <p className="vr-rise mt-8 max-w-xl text-lg leading-8 text-[#969BA5]" style={{ animationDelay: "0.5s" }}>{children}</p>
      </div>
    </section>
  );
}