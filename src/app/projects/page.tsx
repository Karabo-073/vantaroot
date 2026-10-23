
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projects | VantaRoot",
  description:
    "Wireless security research, controlled labs and open-source projects from VantaRoot.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Projects & open source"
        title={
          <>
            RESEARCH MADE
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
              PRACTICAL.
            </span>
          </>
        }
      >
        Wireless systems, experimental security labs, and open-source
        tools. Six spaces reserved for research in progress.
      </PageHero>

      <section
        aria-label="Research projects"
        className="px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <article
              key={i}
              style={{
                animationDelay: `${i * 0.12}s`,
              }}
              className="vr-rise group relative flex min-h-[290px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0A0B0D] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#E52432]/70 hover:bg-[#101216] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#E52432]/10 transition-transform duration-700 group-hover:scale-150 group-hover:border-[#E52432]/30"
              />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-[#E52432]">
                  PROJECT_{String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full border border-white/30 transition-colors group-hover:border-[#E52432] group-hover:bg-[#E52432]" />
              </div>

              <div className="relative">
                <div className="mb-5 h-px w-12 bg-[#E52432]/70 transition-all duration-500 group-hover:w-24" />
                <h2 className="text-2xl font-black tracking-tight text-white/80 transition-colors group-hover:text-white">
                  Research slot
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#969BA5]">
                  Project details will be published here when the work is ready.
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#686D77]">
                  VANTAROOT / LAB
                </span>
                <span className="text-xs text-[#969BA5] transition-colors group-hover:text-[#E52432]">
                  In development ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
