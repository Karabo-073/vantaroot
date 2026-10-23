
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Books | VantaRoot",
  description:
    "Explore technical books and educational publications from VantaRoot.",
};

const publications = [
  {
    id: "BOOK_01",
    title: "Binary Exploitation & Cryptography",
    description:
      "Explore binary exploitation fundamentals, cryptographic principles, and the mathematics behind security.",
    status: "Available",
  },
  {
    id: "BOOK_02",
    title: "The Maths Behind Cryptography",
    description:
      "Understand the mathematical foundations of cryptography, from modular arithmetic to essential number theory.",
    status: "Available",
  },
  {
    id: "BOOK_03",
    title: "Android Security",
    description:
      "An introduction to Android security architecture, application analysis, and mobile security research.",
    status: "In development",
  },
  {
    id: "BOOK_04",
    title: "Wireless Security Research",
    description:
      "A practical exploration of wireless protocols, attack surfaces, and defensive security research.",
    status: "Coming soon",
  },
];

export default function BooksPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Books & knowledge"
        title={
          <>
            KNOWLEDGE IS
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
              A TOOL.
            </span>
          </>
        }
      >
        Technical publications, security research, and practical knowledge
        built to make cybersecurity education more accessible.
      </PageHero>

      <section
        aria-label="VantaRoot publications"
        className="px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E52432]">
                The library
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Research. Learn. Build.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#969BA5]">
              Independent technical publications covering cybersecurity,
              cryptography, and emerging research.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {publications.map((book, index) => (
              <article
                key={book.id}
                style={{ animationDelay: `${index * 120}ms` }}
                className="vr-rise group relative flex min-h-[300px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0A0B0D] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E52432]/60 hover:bg-[#101216] sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#E52432]/10 transition-transform duration-700 group-hover:scale-150 group-hover:border-[#E52432]/30"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-[#E52432]">
                    {book.id}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#686D77]">
                    {book.status}
                  </span>
                </div>

                <div className="relative py-10">
                  <div className="mb-6 h-px w-12 bg-[#E52432]/70 transition-all duration-500 group-hover:w-24" />

                  <h3 className="max-w-lg text-2xl font-black tracking-tight text-white/85 transition-colors group-hover:text-white sm:text-3xl">
                    {book.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#969BA5]">
                    {book.description}
                  </p>
                </div>

                <div className="relative flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#686D77]">
                    VANTAROOT / LIBRARY
                  </span>

                  <span className="text-xs text-[#969BA5] transition-colors group-hover:text-[#E52432]">
                    {book.status === "Available"
                      ? "Read publication ↗"
                      : "In progress"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
