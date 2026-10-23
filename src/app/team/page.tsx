import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Team | VantaRoot",
  description: "Meet the people building VantaRoot's research, technology and community.",
};

const team = [
  { initials: "MM", name: "Manuel Molapo", role: "Founder & Cybersecurity Research Lead", email: "Manuel@vantaroot.com", bio: "Leads VantaRoot's research direction, with an emphasis on wireless security, vulnerability research, technical investigation, and responsible disclosure." },
  { initials: "LM", name: "Lehlogonolo Maja", role: "Chief Marketing Officer", email: "Lehlogonolo@vantaroot.com", bio: "Leads brand strategy, communications, outreach, and the presentation of VantaRoot's research to the wider security community." },
  { initials: "AC", name: "Atlegang Chauke", role: "Chief Information Officer", email: "Atlegang@vantaroot.com", bio: "Supports information strategy, technology direction, and the systems that underpin VantaRoot's operations and knowledge sharing." },
  { initials: "TK", name: "Tebatso Kekana", role: "Chief Operating Officer", email: "Tebatso@vantaroot.com", bio: "Coordinates operational planning and internal processes to support VantaRoot's research activities and organisational development." },
];

export default function TeamPage() {
  return (
    <PageShell>
      <PageHero kicker="The team" title={<>INDEPENDENT<span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">THINKING.</span></>}>
        Four people, one mission: investigate wireless technologies and publish research that makes connected systems safer.
      </PageHero>

      <section aria-label="Team members">
        {team.map((m, i) => (
          <article key={m.email} style={{ animationDelay: `${0.6 + i * 0.18}s` }}
            className="vr-rise group relative overflow-hidden border-b border-white/10 px-5 py-14 transition-colors duration-500 hover:bg-[#101216] sm:px-10 sm:py-20">
            <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_1.2fr]">
              <div className="relative grid h-64 place-items-center sm:h-80" aria-hidden="true">
                <span className="vr-ring absolute h-40 w-40 rounded-full border border-[#E52432]" style={{ animationDelay: `${i * 0.4}s` }} />
                <span className="vr-ring absolute h-40 w-40 rounded-full border border-[#E52432]" style={{ animationDelay: `${i * 0.4 + 1.6}s` }} />
                <span className="relative text-[clamp(7rem,18vw,15rem)] font-black leading-none tracking-[-0.08em] text-transparent transition-all duration-700 [-webkit-text-stroke:1.5px_rgba(244,244,245,0.6)] group-hover:scale-105 group-hover:text-[#E52432] group-hover:[-webkit-text-stroke:1.5px_#E52432]">
                  {m.initials}
                </span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E52432]">VR_TEAM_{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{m.name}</h2>
                <p className="mt-3 text-sm font-semibold text-[#969BA5]">{m.role}</p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#C4C7CE]">{m.bio}</p>
                <div className="mt-8">
                  <a href={`mailto:${m.email}`} className="break-words border-b border-white/30 pb-1 text-sm font-bold transition-colors hover:border-[#E52432] hover:text-[#E52432] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E52432]">
                    {m.email}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}