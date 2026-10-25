import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BooksShowcase from "@/components/BooksShowcase";

/* ---------- Research data ---------- */

const disciplines = [
  {
    id: "WIFI",
    title: "Wi-Fi Security",
    body: "IEEE 802.11 authentication, handshakes, network configuration and wireless security weaknesses.",
    proto: "802.11 / WPA2 / WPA3",
  },
  {
    id: "BLE",
    title: "Bluetooth & BLE",
    body: "Pairing security, device discovery, protocol behaviour and connected-device investigations.",
    proto: "Bluetooth / BLE",
  },
  {
    id: "AUTO",
    title: "Automotive Wireless",
    body: "Wireless interfaces, keyless-entry technologies and automotive security in authorised test environments.",
    proto: "RF / Keyless Entry",
  },
  {
    id: "RF",
    title: "RF, IoT & Connected Devices",
    body: "Radio-frequency behaviour and the security of everyday connected hardware and communication systems.",
    proto: "RF / IoT / Hardware",
  },
];

const publications = [
  {
    id: "BLOG_01",
    category: "Bluetooth security",
    title: "Bluetooth DoS: Practical Investigation",
    tags: ["Bluetooth", "Kali Linux", "Security Research"],
    href: null,
  },
  {
    id: "BLOG_02",
    category: "Wireless security",
    title: "Wi-Fi Security: WPA2 Handshake Analysis",
    tags: ["Wi-Fi", "WPA2", "Aircrack-ng"],
    href: null,
  },
  {
    id: "BLOG_03",
    category: "Evil twin security",
    title: "Evil Twin Threats: Android and Wi-Fi",
    tags: ["Evil Twin", "Wi-Fi", "Android"],
    href: null,
  },
];

// Image paths must match the real filenames in /public (case-sensitive on Vercel).
const books = [
  {
    id: "BOOK_01",
    title: "Wi-Fi Hacking",
    body: "Explore wireless networks, Wi-Fi protocols and practical security research.",
    image: "/wifi.png",
    number: "01",
  },
  {
    id: "BOOK_02",
    title: "Car Hacking",
    body: "Investigate automotive wireless technologies and connected vehicle security.",
    image: "/car.png",
    number: "02",
  },
  {
    id: "BOOK_03",
    title: "Satellite Hacking",
    body: "Explore satellite communication systems, radio technologies and their security boundaries.",
    image: "/satellite.png",
    number: "03",
  },
];

const nav = [
  ["Research", "/blogs"],
  ["Services", "/services"],
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
    <div className="overflow-hidden bg-[#08090B] text-[#F4F4F5] selection:bg-[#E52432]">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#E52432] focus:px-4 focus:py-2 ${focus}`}
      >
        Skip to content
      </a>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090B]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-10">
          <Link
            href="/"
            className={`text-lg font-black tracking-[-0.06em] transition-transform duration-300 hover:scale-105 ${focus}`}
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
                className={`text-xs text-[#969BA5] transition-colors duration-300 hover:text-[#E52432] sm:text-sm ${focus} ${
                  href === "/team" ? "hidden md:inline" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        {/* LAYER 1 — Cinematic hero */}
        <section className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-white/10">
          {/* Background */}
          <div className="absolute inset-0 -z-20 bg-[#08090B]" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 -z-10 h-[650px] w-[650px] animate-pulse rounded-full bg-[#E52432]/15 blur-[150px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[550px] w-[550px] rounded-full bg-red-950/30 blur-[150px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />

          <div className="mx-auto grid w-full max-w-[1800px] items-center gap-10 px-5 pb-16 pt-28 sm:px-10 lg:min-h-screen lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:py-24">
            {/* LEFT — Headline */}
            <div className="relative z-20 py-8 lg:py-12">
              <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E52432] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E52432]" />
                </span>

                <p className={`${mono} text-[#C4C7CE]`}>
                  Independent security research
                </p>

                <span className="hidden h-1 w-1 rounded-full bg-[#E52432] sm:block" />

                <p className={`${mono} text-[#777D88]`}>
                  Johannesburg, South Africa
                </p>
              </div>

              <h1 className="max-w-4xl text-[clamp(3rem,6.5vw,7rem)] font-black leading-[0.84] tracking-[-0.075em]">
                BREAKING
                <span className="mt-3 block">SYSTEMS.</span>
                <span className="mt-4 block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
                  ADVANCING
                </span>
                <span className="mt-3 block text-[#E52432]">
                  SECURITY.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#C4C7CE] sm:text-lg sm:leading-8">
                Independent research into wireless technologies, connected
                devices and the security boundaries shaping our connected
                world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/blogs"
                  className={`group inline-flex items-center gap-3 bg-[#E52432] px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff3544] hover:shadow-[0_12px_40px_rgba(229,36,50,0.25)] ${focus}`}
                >
                  EXPLORE RESEARCH
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/books"
                  className={`group inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#E52432] hover:bg-[#E52432]/10 ${focus}`}
                >
                  EXPLORE BOOKS
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#E52432]" />
                <p className={mono}>
                  Wi-Fi / Bluetooth / Automotive / RF
                </p>
              </div>
            </div>

            {/* RIGHT — Oversized moving image */}
            <div className="relative mx-auto w-full min-w-0 lg:-mr-10 lg:ml-auto lg:w-[calc(100%+40px)]">
              {/* Atmospheric glow */}
              <div
                aria-hidden="true"
                className="absolute inset-[8%] animate-pulse rounded-full bg-[#E52432]/20 blur-[100px]"
              />

              {/* Image frame */}
              <div className="group relative isolate overflow-hidden border border-white/15 bg-[#101216] shadow-[0_0_100px_rgba(229,36,50,0.10)] transition-all duration-700 hover:border-[#E52432]/60 hover:shadow-[0_0_100px_rgba(229,36,50,0.20)]">
                {/* Animated scan lines */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 4px)",
                  }}
                />

                {/* Moving red edge */}
                <div className="absolute left-0 right-0 top-0 z-30 h-px origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#E52432] to-transparent" />

                <div className="relative aspect-[4/3] min-h-[350px] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[650px] xl:aspect-[5/4] xl:min-h-[700px]">
                  <Image
                    src="/wireless_wifi.png"
                    alt="VantaRoot wireless security research"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-110"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E52432]/15 via-transparent to-[#08090B]/65" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/10" />

                  {/* HUD corners */}
                  <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#E52432] sm:left-8 sm:top-8 sm:h-12 sm:w-12" />
                  <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#E52432] sm:right-8 sm:top-8 sm:h-12 sm:w-12" />
                  <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#E52432] sm:bottom-8 sm:left-8 sm:h-12 sm:w-12" />
                  <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#E52432] sm:bottom-8 sm:right-8 sm:h-12 sm:w-12" />

                  {/* Floating research label */}
                  <div className="absolute left-8 top-20 z-20 max-w-[80%] border border-white/15 bg-[#08090B]/65 p-4 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 sm:left-12 sm:top-24">
                    <p className={`${mono} text-[#E52432]`}>
                      VANTAROOT / RESEARCH
                    </p>
                    <p className="mt-2 text-sm font-bold sm:text-base">
                      Explore the invisible.
                    </p>
                  </div>

                  {/* Bottom image caption */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className={`${mono} text-[#E52432]`}>
                          WIRELESS SYSTEMS / 001
                        </p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                          BEYOND THE SURFACE.
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-6 text-white/70 sm:text-base">
                          Wi-Fi. Bluetooth. Automotive. Radio frequency.
                        </p>
                      </div>

                      <span className="hidden font-mono text-xs text-white/40 sm:block">
                        VR—001
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image metadata */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className={`${mono} text-white/40`}>
                  SIGNAL / ANALYSIS
                </span>
                <span className={`${mono} text-white/40`}>
                  VANTAROOT LABS
                </span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#mission"
            aria-label="Scroll to our mission"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-[#E52432] lg:flex"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
            <span className="h-8 w-px origin-top animate-pulse bg-gradient-to-b from-[#E52432] to-transparent" />
          </a>
        </section>

        {/* LAYER 2 — Mission */}
        <Layer id="mission" className="relative overflow-hidden">
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
            title="Four areas. One connected surface."
          />

          <ul className="mt-14 grid border-t border-white/10 md:grid-cols-2">
            {disciplines.map((d) => (
              <li
                key={d.id}
                className="group relative border-b border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.025] md:odd:border-r sm:p-12"
              >
                <span className={`${mono} text-[#E52432]`}>
                  {d.proto}
                </span>

                <h3 className="mt-6 text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {d.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#969BA5]">
                  {d.body}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-6 right-8 font-mono text-5xl font-black tracking-tighter text-white/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:text-[#E52432]/30"
                >
                  {d.id}
                </span>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#E52432] transition-all duration-500 group-hover:w-full" />
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

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#E52432]">
                    {p.title}
                  </h3>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-white/10 px-2 py-1 text-xs text-[#969BA5] transition-colors duration-300 group-hover:border-white/20"
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
                "group relative flex min-h-[380px] flex-col overflow-hidden bg-[#08090B] p-8 transition-all duration-500 hover:bg-[#101216]";

              return p.href ? (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cls} ${focus}`}
                >
                  <span className="absolute left-0 top-0 h-px w-0 bg-[#E52432] transition-all duration-500 group-hover:w-full" />
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

        {/* LAYER 5 — Books (animated, client component) */}
        <Layer tone="panel">
          <Heading
            kicker="Books & knowledge"
            title="Knowledge is a tool."
            action={{ label: "Explore the library", href: "/books" }}
          />

          <BooksShowcase books={books} />
        </Layer>

        {/* LAYER 6 — Collaboration */}
        <section className="relative isolate overflow-hidden border-y border-[#E52432]/40 bg-[#08090B] px-5 py-28 sm:px-10 sm:py-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-[#E52432]/15 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px]">
            <p className={`${mono} text-[#E52432]`}>
              Collaborate with VantaRoot
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.92] tracking-[-0.055em]">
              THE NEXT DISCOVERY STARTS WITH A QUESTION.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#C4C7CE]">
              Have a research proposal, a security concern or an idea worth
              investigating? Start a conversation with VantaRoot.
            </p>

            <Link
              href="/contact"
              className={`group mt-10 inline-flex items-center gap-4 bg-[#E52432] px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff3544] hover:shadow-[0_12px_40px_rgba(229,36,50,0.25)] ${focus}`}
            >
              CONTACT VANTAROOT
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* LAYER 7 — Footer */}
      <footer className="px-5 py-14 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className={`inline-block text-lg font-black tracking-[-0.06em] ${focus}`}
            >
              VANTAROOT<span className="text-[#E52432]">.</span>
            </Link>

            <p className="mt-2 text-sm text-[#969BA5]">
              Breaking Systems. Advancing Security.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#777D88]">
              Independent research into wireless technologies and connected
              systems.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className={`${mono} text-[#969BA5]`}>Explore</p>

            <ul className="mt-3 space-y-3 text-sm">
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

            <p className="mt-3 text-sm leading-6 text-[#C4C7CE]">
              Wi-Fi, Bluetooth, RF, automotive wireless, satellite
              communications and connected devices.
            </p>

            <Link
              href="/contact"
              className={`mt-4 inline-block text-sm text-[#969BA5] transition-colors hover:text-[#E52432] ${focus}`}
            >
              Get in touch ↗
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 pt-6 text-xs text-[#777D88]">
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
  id,
}: {
  children: ReactNode;
  tone?: "panel";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
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