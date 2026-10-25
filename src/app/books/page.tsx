
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Books | VantaRoot",
  description:
    "Explore VantaRoot technical books on Wi-Fi, Bluetooth, satellite, automotive, camera, and ATM security research.",
};

const publications = [
  {
    id: "BOOK_01",
    title: "Wi-Fi Hacking & Wireless Security",
    description:
      "Explore Wi-Fi protocols, wireless reconnaissance, WPA/WPA2 security, handshake analysis, rogue access points, and authorised wireless testing.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
  {
    id: "BOOK_02",
    title: "Bluetooth Hacking & Security",
    description:
      "Investigate Bluetooth, Bluetooth Low Energy, device discovery, protocol analysis, pairing weaknesses, and wireless privacy.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
  {
    id: "BOOK_03",
    title: "Satellite Communications Security",
    description:
      "Explore satellite communications, wireless signal analysis, communication protocols, attack surfaces, and satellite system security.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
  {
    id: "BOOK_04",
    title: "Automotive Hacking & Vehicle Security",
    description:
      "Learn about CAN bus architecture, vehicle communication protocols, telematics, keyless-entry security, and controlled automotive research.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
  {
    id: "BOOK_05",
    title: "Camera Hacking & IoT Security",
    description:
      "Explore IP cameras, wireless surveillance, device discovery, insecure configurations, firmware security, and privacy protection.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
  {
    id: "BOOK_06",
    title: "ATM Security & Payment Systems",
    description:
      "Study ATM architecture, transaction security, hardware and software attack surfaces, communication protocols, and responsible security assessments.",
    status: "Coming soon",
    price: "$20",
    purchaseUrl: "",
  },
];

export default function BooksPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Books & wireless knowledge"
        title={
          <>
            UNDERSTAND THE
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
              INVISIBLE.
            </span>
          </>
        }
      >
        Technical publications exploring Wi-Fi, Bluetooth, satellites,
        automotive systems, cameras, and ATM security through
        independent research and responsible security testing.
      </PageHero>

      <section
        aria-label="VantaRoot technical publications"
        className="px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E52432]">
                The research library
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Learn. Investigate. Secure.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#969BA5]">
              Technical books and educational resources for cybersecurity
              enthusiasts, researchers, and security professionals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {publications.map((book, index) => (
              <article
                key={book.id}
                style={{ animationDelay: `${index * 120}ms` }}
                className="vr-rise group relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0A0B0D] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E52432]/60 hover:bg-[#101216] sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#E52432]/10 transition-transform duration-700 group-hover:scale-150 group-hover:border-[#E52432]/30"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-[#E52432]">
                    {book.id}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#969BA5]">
                    {book.status}
                  </span>
                </div>

                <div className="relative py-8">
                  <div className="mb-6 h-px w-12 bg-[#E52432]/70 transition-all duration-500 group-hover:w-24" />

                  <h3 className="max-w-lg text-2xl font-black tracking-tight text-white/85 transition-colors group-hover:text-white sm:text-3xl">
                    {book.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#969BA5]">
                    {book.description}
                  </p>
                </div>

                <div className="relative flex flex-col gap-5 border-t border-white/10 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#686D77]">
                        VANTAROOT / LIBRARY
                      </p>

                      <p className="mt-2 text-2xl font-black text-white">
                        {book.price}
                      </p>
                      <p className="mt-1 text-xs text-[#686D77]">
                        USD · Per book
                      </p>
                    </div>

                    <span className="text-xs text-[#969BA5]">
                      {book.status}
                    </span>
                  </div>

                  {book.purchaseUrl ? (
                    <a
                      href={book.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 border border-[#E52432] bg-[#E52432] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#E52432]"
                    >
                      Buy Book — {book.price}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full cursor-not-allowed items-center justify-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-[#686D77]"
                    >
                      Available Soon
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}