
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Data ---------- */

const disciplines = [
  {
    id: "WIFI",
    title: "Wi-Fi Security",
    body: "IEEE 802.11 authentication, handshakes and network configuration weaknesses.",
    proto: "802.11 / WPA2 / WPA3",
  },
  {
    id: "BLE",
    title: "Bluetooth & BLE",
    body: "Pairing security, device discovery and the behaviour of connected products.",
    proto: "Bluetooth / BLE",
  },
  {
    id: "AUTO",
    title: "Automotive Wireless",
    body: "Wireless interfaces and keyless-entry systems, studied in authorised test environments.",
    proto: "RF / Keyless entry",
  },
  {
    id: "RF",
    title: "RF, IoT & Connected Devices",
    body: "Radio-frequency behaviour and the attack surface of everyday connected hardware.",
    proto: "RF / IoT",
  },
];

const publications = [
  {
    id: "BLOG_01",
    category: "Bluetooth security",
    title: "Bluetooth DoS: Practical Investigation",
    tags: ["Bluetooth", "Kali Linux", "Security Research"],
    href: "https://vantaroot.vercel.app/writeups/bluetooth-dos-research",
  },
  {
    id: "BLOG_02",
    category: "Wireless security",
    title: "Wi-Fi Security: WPA2 Handshake Analysis",
    tags: ["Wi-Fi", "WPA2", "Aircrack-ng", "Wireless Research"],
    href: "https://vantaroot.vercel.app/writeups/wifi-security-research",
  },
  {
    id: "BLOG_03",
    category: "Evil twin security",
    title: "Evil Twin Threats: Android and Wi-Fi",
    tags: ["Evil Twin", "Wi-Fi", "Android", "Wireless Research"],
    href: null,
  },
];

const projects = [
  {
    id: "PROJECT_01",
    status: "IN DEVELOPMENT",
    title: "Wireless Security Lab",
    body: "A controlled environment for Wi-Fi, Bluetooth and connected-device testing, built around reproducible experiments and clear documentation.",
  },
  {
    id: "PROJECT_02",
    status: "IN DEVELOPMENT",
    title: "Open-source security tools",
    body: "Utilities and workflows for ethical testing, repeatable experiments and security education.",
  },
  {
    id: "PROJECT_03",
    status: "PLANNED",
    title: "Automotive wireless research",
    body: "Security of automotive wireless technologies and keyless-entry systems in authorised test environments.",
  },
];

const team = [
  {
    initials: "MM",
    name: "Manuel Molapo",
    role: "Founder & Cybersecurity Research Lead",
    email: "Manuel@vantaroot.com",
  },
  {
    initials: "LM",
    name: "Lehlogonolo Maja",
    role: "Chief Marketing Officer",
    email: "Lehlogonolo@vantaroot.com",
  },
  {
    initials: "AC",
    name: "Atlegang Chauke",
    role: "Chief Information Officer",
    email: "Atlegang@vantaroot.com",
  },
  {
    initials: "TK",
    name: "Tebatso Kekana",
    role: "Chief Operating Officer",
    email: "Tebatso@vantaroot.com",
  },
];

const books = [
  {
    title: "Binary Exploitation & Cryptography",
    body: "Low-level software security and the foundations of cryptography.",
    status: "PUBLICATION",
  },
  {
    title: "The Maths Behind Cryptography",
    body: "The mathematical principles that underpin cryptographic systems.",
    status: "PUBLICATION",
  },
  {
    title: "Android Security",
    body: "Android security concepts and mobile application testing.",
    status: "IN DEVELOPMENT",
  },
];

const nav = [
  ["Research", "/blogs"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Books", "/books"],
  ["Contact", "/contact"],
] as const;

const mono = "font-mono text-[11px] tracking-[0.14em] uppercase";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E52432]";

/* ---------- Homepage ---------- */

export default function Home() {
  return (
    <div className="bg-[#08090B] text-[#F4F4F5] selection:bg-[#E52432]">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#E52432] focus:px-4 focus:py-2 ${focus}`}
      >
        Skip to content
      </a>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090B]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-10">
          <Link
            href="/"
            className={`text-lg font-black tracking-[-0.06em] ${focus}`}
          >
            VANTAROOT<span className="text-[#E52432]">.</span>
          </Link>

          <nav
            aria-label="Primary"
            className="flex items-center gap-4 sm:gap-8"
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-xs text-[#969BA5] transition-colors hover:text-white sm:text-sm ${focus} ${
                  href === "/team" || href === "/books"
                    ? "hidden md:inline"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        {/* LAYER 1 — Hero */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[#08090B]" />

          <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#E52432]/10 blur-[140px]" />

          <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 pb-16 pt-32 sm:px-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT — Text */}
            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className={`${mono} text-[#969BA5]`}>
                  Independent security research
                </p>

                <span className="hidden h-1 w-1 rounded-full bg-[#E52432] sm:block" />

                <p className={`${mono} text-[#969BA5]`}>
                  Johannesburg, South Africa
                </p>
              </div>

              <h1 className="text-[clamp(2.75rem,6.5vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em]">
                BREAKING SYSTEMS.
                <span className="mt-3 block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
                  ADVANCING SECURITY.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#C4C7CE] sm:text-lg sm:leading-8">
                Independent research into wireless technologies, connected
                devices, and the security boundaries that shape our connected
                world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/blogs"
                  className={`bg-[#E52432] px-7 py-4 text-sm font-bold transition-colors hover:bg-[#ff3544] ${focus}`}
                >
                  EXPLORE RESEARCH
                </Link>

                <Link
                  href="/projects"
                  className={`border border-white/25 px-7 py-4 text-sm font-bold transition-colors hover:border-white hover:bg-white/5 ${focus}`}
                >
                  VIEW PROJECTS
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-5">
                <span className="h-2 w-2 rounded-full bg-[#E52432]" />
                <p className={mono}>
                  Wireless systems / Protocol analysis
                </p>
              </div>
            </div>

            {/* RIGHT — Wireless image */}
            <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
              <div className="absolute inset-8 rounded-full bg-[#E52432]/15 blur-[100px]" />

              <div className="relative overflow-hidden border border-white/10 bg-[#101216]">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#E52432]/10 via-transparent to-[#08090B]/30" />

                <Image
                  src="/wireless_wifi.png"
                  alt="Wireless technology and Wi-Fi security research"
                  width={1200}
                  height={1200}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto max-h-[620px] w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#08090B] via-[#08090B]/75 to-transparent p-5 pt-24 sm:p-7 sm:pt-28">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className={`${mono} text-[#E52432]`}>
                        RESEARCH_001 / WIRELESS
                      </p>
                      <p className="mt-2 text-sm text-white/75">
                        Wi-Fi · Bluetooth · RF · Connected devices
                      </p>
                    </div>

                    <span className="font-mono text-xs text-white/40">
                      01—04
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className={`${mono} text-white/35`}>
                  SIGNAL / ANALYSIS
                </span>
                <span className={`${mono} text-white/35`}>
                  VANTAROOT LABS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LAYER 2 — Mission */}
        <Layer className="relative overflow-hidden">
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="pointer-events-none absolute -right-40 top-1/2 h-[640px] w-[640px] -translate-y-1/2 text-[#E52432] opacity-60"
          >
            {[60, 120, 180, 240, 300].map((r, i) => (
              <circle
                key={r}
                cx="300"
                cy="300"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray={i % 2 ? "3 7" : undefined}
                opacity={1 - i * 0.17}
              />
            ))}

            <line
              x1="0"
              y1="300"
              x2="600"
              y2="300"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />

            <line
              x1="300"
              y1="0"
              x2="300"
              y2="600"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />

            <text
              x="312"
              y="292"
              className="fill-[#969BA5] font-mono"
              fontSize="11"
            >
              2.4 GHz
            </text>

            <text
              x="312"
              y="232"
              className="fill-[#969BA5] font-mono"
              fontSize="11"
            >
              5 GHz
            </text>
          </svg>

          <div className="relative max-w-4xl">
            <Heading
              kicker="Our mission"
              title="The invisible layer is still an attack surface."
            />

            <p className="mt-10 max-w-xl text-lg leading-8 text-[#969BA5]">
              Wireless interfaces connect devices, infrastructure, vehicles
              and people. That reach is exactly why their security deserves
              close, responsible investigation.
            </p>
          </div>
        </Layer>

        {/* LAYER 3 — Research disciplines */}
        <Layer tone="panel">
          <Heading
            kicker="Research disciplines"
            title="Four areas, one connected surface."
          />

          <ul className="mt-14 grid border-t border-white/10 md:grid-cols-2">
            {disciplines.map((d) => (
              <li
                key={d.id}
                className="group relative border-b border-white/10 p-8 transition-colors hover:bg-white/[0.025] md:odd:border-r sm:p-12"
              >
                <span className={`${mono} text-[#E52432]`}>{d.proto}</span>

                <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  {d.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#969BA5]">
                  {d.body}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-6 right-8 font-mono text-5xl font-black tracking-tighter text-white/[0.06] transition-colors group-hover:text-[#E52432]/30"
                >
                  {d.id}
                </span>
              </li>
            ))}
          </ul>
        </Layer>

        {/* LAYER 4 — Featured research */}
        <Layer>
          <Heading
            kicker="Featured research"
            title="Field notes."
            action={{ label: "All research", href: "/blogs" }}
          />

          <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
            {publications.map((p) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`${mono} text-[#E52432]`}>
                      {p.id}
                    </span>

                    {!p.href && (
                      <span
                        className={`${mono} border border-white/20 px-2 py-1 text-[#969BA5]`}
                      >
                        UPCOMING
                      </span>
                    )}
                  </div>

                  <p className={`${mono} mt-16 text-[#969BA5]`}>
                    {p.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-white/10 px-2 py-1 text-xs text-[#969BA5]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {p.href && (
                    <p className="mt-8 text-sm font-bold text-[#E52432] transition-colors group-hover:text-white">
                      READ WRITE-UP ↗
                    </p>
                  )}
                </>
              );

              const cls =
                "group flex min-h-[380px] flex-col bg-[#08090B] p-8 transition-colors hover:bg-[#101216]";

              return p.href ? (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cls} ${focus}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={p.id} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Layer>

        {/* LAYER 5 — Projects */}
        <Layer tone="panel">
          <Heading
            kicker="Projects"
            title="Research made practical."
            action={{ label: "All projects", href: "/projects" }}
          />

          <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {projects.map((p) => (
              <li
                key={p.id}
                className="grid gap-4 py-8 md:grid-cols-[180px_1fr_2fr] md:items-baseline md:gap-10"
              >
                <span
                  className={`${mono} ${
                    p.status === "PLANNED"
                      ? "text-[#969BA5]"
                      : "text-[#E52432]"
                  }`}
                >
                  {p.status}
                </span>

                <h3 className="text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>

                <p className="leading-7 text-[#969BA5]">{p.body}</p>
              </li>
            ))}
          </ul>
        </Layer>

        {/* LAYER 6 — Team */}
        <Layer>
          <Heading
            kicker="Team"
            title="Independent thinking. Shared mission."
            action={{ label: "Full team", href: "/team" }}
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.email} className="group">
                <div
                  aria-hidden="true"
                  className="grid h-40 place-items-center border border-white/10 bg-[linear-gradient(135deg,#191b21,#0b0c0f)] text-5xl font-black tracking-tighter text-white/80 transition-colors group-hover:border-[#E52432]/50"
                >
                  {member.initials}
                </div>

                <h3 className="mt-5 text-lg font-bold">{member.name}</h3>

                <p className="mt-1 text-sm text-[#969BA5]">{member.role}</p>

                <a
                  href={`mailto:${member.email}`}
                  className={`mt-3 block break-words text-sm transition-colors hover:text-[#E52432] ${focus}`}
                >
                  {member.email}
                </a>
              </li>
            ))}
          </ul>
        </Layer>

        {/* LAYER 7 — Books */}
        <Layer tone="panel">
          <Heading
            kicker="Books"
            title="Knowledge is a tool."
            action={{ label: "Library", href: "/books" }}
          />

          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {books.map((book) => (
              <li key={book.title} className="flex gap-6">
                <div className="flex h-52 w-36 shrink-0 flex-col justify-between border-l-4 border-[#E52432] bg-[#0d0e12] p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
                  <span className={`${mono} text-[9px] text-[#E52432]`}>
                    VantaRoot
                  </span>

                  <span className="text-sm font-black uppercase leading-tight tracking-tight">
                    {book.title}
                  </span>
                </div>

                <div>
                  <span className={`${mono} text-[#E52432]`}>
                    {book.status}
                  </span>

                  <h3 className="mt-3 text-lg font-bold leading-snug">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#969BA5]">
                    {book.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Layer>

        {/* LAYER 8 — Collaboration */}
        <section className="relative overflow-hidden border-y border-[#E52432]/40 bg-[radial-gradient(ellipse_at_bottom_right,rgba(229,36,50,0.18),transparent_60%)] px-5 py-32 sm:px-10 sm:py-44">
          <div className="mx-auto max-w-[1400px]">
            <p className={`${mono} text-[#E52432]`}>
              Collaborate with VantaRoot
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.92] tracking-[-0.055em]">
              THE NEXT DISCOVERY STARTS WITH A QUESTION.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#C4C7CE]">
              Have a research proposal, a security concern, or an idea worth
              investigating? Start a conversation with VantaRoot.
            </p>

            <Link
              href="/contact"
              className={`mt-10 inline-block bg-[#E52432] px-8 py-4 text-sm font-bold transition-colors hover:bg-[#ff3544] ${focus}`}
            >
              CONTACT THE TEAM
            </Link>
          </div>
        </section>
      </main>

      {/* LAYER 9 — Footer */}
      <footer className="px-5 py-14 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-black tracking-[-0.06em]">
              VANTAROOT<span className="text-[#E52432]">.</span>
            </p>

            <p className="mt-2 text-sm text-[#969BA5]">
              Breaking Systems. Advancing Security.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#777D88]">
              Independent research into wireless technologies and connected
              systems.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className={`${mono} text-[#969BA5]`}>Site</p>

            <ul className="mt-3 space-y-2 text-sm">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-colors hover:text-[#E52432] ${focus}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={`${mono} text-[#969BA5]`}>Research focus</p>

            <p className="mt-3 text-sm leading-6">
              Wi-Fi, Bluetooth, RF, automotive wireless and connected devices.
            </p>

            <a
              href="mailto:Manuel@vantaroot.com"
              className={`mt-4 inline-block text-sm text-[#969BA5] transition-colors hover:text-[#E52432] ${focus}`}
            >
              Manuel@vantaroot.com
            </a>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 pt-6 text-xs text-[#969BA5]">
          © 2026 VantaRoot. Johannesburg, South Africa.
        </p>
      </footer>
    </div>
  );
}

/* ---------- Shared components ---------- */

function Layer({
  children,
  tone,
  className = "",
}: {
  children: ReactNode;
  tone?: "panel";
  className?: string;
}) {
  return (
    <section
      className={`relative border-b border-white/10 px-5 py-24 sm:px-10 sm:py-36 ${
        tone === "panel" ? "bg-[#101216]" : ""
      } ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {children}
      </div>
    </section>
  );
}

function Heading({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className={`${mono} text-[#E52432]`}>{kicker}</p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className={`shrink-0 border-b border-white/30 pb-1 text-sm font-bold transition-colors hover:border-[#E52432] hover:text-[#E52432] ${focus}`}
        >
          {action.label} ↗
        </Link>
      )}
    </div>
  );
}
