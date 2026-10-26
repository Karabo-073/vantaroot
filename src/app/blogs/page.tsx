import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Research / Field Notes | VantaRoot",
  description:
    "Technical investigations into wireless systems, cybersecurity, and connected-device attack surfaces.",
};

export default function BlogsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Research journal"
        title={
          <>
            RESEARCH /
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">
              FIELD NOTES
            </span>
          </>
        }
      >
        Technical investigations into wireless systems, security protocols,
        and connected-device attack surfaces.
      </PageHero>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 pt-8 sm:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            VantaRoot / Publications
          </p>
          <p className="text-xs text-zinc-500">
            {String(articles.length).padStart(2, "0")} ARTICLES
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => {
            const live = article.status === "published";

            return (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-white/10 bg-transparent transition duration-300 hover:border-red-500/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  <span className="absolute left-4 top-4 border border-white/20 bg-black/60 px-3 py-1 text-[10px] tracking-[0.18em] text-zinc-200">
                    BLOG_{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red-500">
                    {article.category}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 transition group-hover:text-red-400">
                    {article.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                    {article.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span
                      className={`text-[10px] uppercase tracking-[0.15em] ${
                        live ? "text-zinc-300" : "text-zinc-500"
                      }`}
                    >
                      {live ? "READ ARTICLE" : "COMING SOON"}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-lg text-red-500 transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <p className="text-xs leading-6 text-zinc-500">
            VANTAROOT / Independent security research / Learn responsibly.
          </p>
        </div>
      </section>
    </PageShell>
  );
}