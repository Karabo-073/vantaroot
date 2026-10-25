import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services | VantaRoot",
  description:
    "VantaRoot is an independent, non-profit wireless security research organisation providing free mentorship, practical research, educational resources, books, workshops, and cybersecurity investigation.",
};

const services = [
  {
    number: "01",
    title: "Free Wireless Pentesting Mentorship",
    description:
      "We provide free mentorship to people around the world who want to learn wireless penetration testing. Whether you are starting your journey or developing your research skills, we aim to help you explore wireless security through practical learning and guidance.",
    label: "OPEN TO EVERYONE",
  },
  {
    number: "02",
    title: "Real-World Security Research",
    description:
      "We investigate wireless technologies, identify security weaknesses, and document our findings through independent research. Our areas of interest include Wi-Fi, Bluetooth, automotive systems, connected devices, and other wireless technologies.",
    label: "INDEPENDENT RESEARCH",
  },
  {
    number: "03",
    title: "Practical Exploitation Videos",
    description:
      "Our YouTube channel features technical demonstrations, controlled lab experiments, and real-world security research. We break down how vulnerabilities work, how they can be investigated, and how systems can be made more secure.",
    label: "WATCH & LEARN",
  },
  {
    number: "04",
    title: "Free PDFs & Technical Books",
    description:
      "We publish free educational PDFs and technical resources to make wireless security knowledge more accessible. We also develop and sell technical books for cybersecurity enthusiasts, aspiring researchers, and security professionals.",
    label: "FREE & PAID RESOURCES",
  },
  {
    number: "05",
    title: "Wireless Security Workshops",
    description:
      "We welcome invitations to deliver wireless security workshops, guest lectures, and technical presentations. Organisations, universities, cybersecurity communities, and event organisers can contact us to discuss inviting the VantaRoot research lead.",
    label: "SPEAKING & TRAINING",
  },
  {
    number: "06",
    title: "Global Cybersecurity Community",
    description:
      "We connect with cybersecurity enthusiasts and researchers worldwide through educational content, research publications, and social media. Follow VantaRoot on LinkedIn, Facebook, TikTok, Instagram, Medium, X, and YouTube to learn, share knowledge, and follow our latest investigations.",
    label: "CONNECT WORLDWIDE",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Services & research"
        title={
          <>
            WIRELESS SECURITY.
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
              KNOWLEDGE FOR ALL.
            </span>
          </>
        }
      >
        VantaRoot is an independent, non-profit wireless security
        research organisation founded by Molapo Manuel, a cybersecurity
        researcher and bug bounty hunter. We investigate wireless
        technologies, share practical security knowledge, and make
        learning resources accessible to people around the world.
      </PageHero>

      <section
        aria-label="VantaRoot services"
        className="px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.number}
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
                  SERVICE_{service.number}
                </span>
                <span className="h-2 w-2 rounded-full border border-white/30 transition-colors group-hover:border-[#E52432] group-hover:bg-[#E52432]" />
              </div>

              <div className="relative">
                <div className="mb-5 h-px w-12 bg-[#E52432]/70 transition-all duration-500 group-hover:w-24" />

                <h2 className="text-2xl font-black tracking-tight text-white/80 transition-colors group-hover:text-white">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#969BA5]">
                  {service.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#686D77]">
                  VANTAROOT / RESEARCH
                </span>
                <span className="text-right text-xs text-[#969BA5] transition-colors group-hover:text-[#E52432]">
                  {service.label} ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="px-5 pb-20 sm:px-10 sm:pb-28"
      >
        <div className="mx-auto max-w-[1400px] border border-white/10 bg-[#0A0B0D] p-8 sm:p-12 lg:p-16">
          <p className="font-mono text-xs tracking-[0.2em] text-[#E52432]">
            WORK WITH US
          </p>

          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl"
          >
            HAVE A WIRELESS SECURITY IDEA?
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#969BA5] sm:text-base">
            Interested in free mentorship, collaborating on research,
            inviting our research lead to speak, or organising a wireless
            security workshop? We welcome enquiries from individuals,
            communities, educational institutions, and organisations
            around the world.
          </p>

          <a
            href="mailto:info@vantaroot.com"
            className="mt-8 inline-flex items-center gap-3 border border-[#E52432] bg-[#E52432] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#E52432]"
          >
            Contact VantaRoot
            <span aria-hidden="true">↗</span>
          </a>

          <p className="mt-5 text-sm text-[#969BA5]">
            Or email us directly at{" "}
            <a
              href="mailto:info@vantaroot.com"
              className="text-white underline decoration-[#E52432] underline-offset-4 transition-colors hover:text-[#E52432]"
            >
              info@vantaroot.com
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}