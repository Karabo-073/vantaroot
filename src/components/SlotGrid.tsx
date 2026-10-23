/** Six empty, animated placeholder cards. Replace with real entries from lib/data.ts when ready. */
export default function SlotGrid({ prefix, label, hint, tall = false }: { prefix: string; label: string; hint: string; tall?: boolean }) {
  return (
    <section className="px-5 py-20 sm:px-10 sm:py-28">
      <ul className="mx-auto grid max-w-[1400px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => {
          const n = String(i + 1).padStart(3, "0");
          return (
            <li key={n} style={{ animationDelay: `${0.6 + i * 0.12}s` }}
              className={`vr-rise vr-sweep group relative flex flex-col justify-between overflow-hidden border border-dashed border-white/15 bg-white/[0.015] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#E52432]/60 hover:bg-[#E52432]/[0.04] ${tall ? "min-h-[420px]" : "min-h-[320px]"}`}>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="text-[#E52432]">{prefix}_{n}</span>
                <span className="text-[#969BA5]">Reserved</span>
              </div>
              <span aria-hidden="true" className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-8xl font-black tracking-tighter text-white/[0.04] transition-colors duration-500 group-hover:text-[#E52432]/20">{n}</span>
              <div className="relative">
                <h2 className="text-xl font-semibold text-[#969BA5]">{label}</h2>
                <p className="mt-2 text-sm text-zinc-600">{hint}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}