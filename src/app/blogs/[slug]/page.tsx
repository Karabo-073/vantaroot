import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { articles, getArticle, type Block } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return { title: "Article Not Found | VantaRoot" };

  return {
    title: `${article.title} | VantaRoot Research`,
    description: article.description,
  };
}

/* ---------- Block renderer ---------- */

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "section":
      return (
        <div className="mb-4 mt-12">
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-red-500">
            {block.number} / Research notes
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            {block.title}
          </h2>
        </div>
      );

    case "p":
      return (
        <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-base">
          {block.text}
        </p>
      );

    case "code":
      return (
        <pre className="my-6 overflow-x-auto border border-white/10 bg-black/30 p-5 text-sm leading-7 text-red-400">
          <code>{block.code ?? block.text}</code>
        </pre>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={750}
              sizes="(max-width: 768px) 100vw, 900px"
              className="h-auto w-full object-contain"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-xs leading-6 text-zinc-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <div className="my-10 border border-white/10 p-6 sm:p-8">
          {block.title && (
            <h3 className="text-xl font-semibold text-zinc-100">
              {block.title}
            </h3>
          )}
          <ul className="mt-5 list-inside list-disc space-y-3 text-sm leading-7 text-zinc-400">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );

    case "link":
      return (
        <a
          href={block.href}
          target={block.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="my-6 inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.15em] text-zinc-200 transition hover:border-red-500 hover:text-red-400"
        >
          {block.text} <span aria-hidden="true">↗</span>
        </a>
      );

    case "note":
      return (
        <div className="my-8 border-l-2 border-red-500 bg-red-500/5 p-5 text-sm leading-7 text-zinc-300">
          {block.text}
        </div>
      );
  }
}

/* ---------- Page ---------- */

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  // Not written yet
  if (article.status === "soon" || article.blocks.length === 0) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-red-500">
            VantaRoot / Research
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-xl leading-8 text-zinc-400">
            {article.description}
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-zinc-500">
            Article coming soon
          </p>
          <Link
            href="/blogs"
            className="mt-10 inline-flex border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.15em] text-zinc-200 transition hover:border-red-500 hover:text-red-400"
          >
            ← Back to research
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 sm:px-8">
        <Link
          href="/blogs"
          className="text-xs uppercase tracking-[0.15em] text-zinc-500 transition hover:text-red-400"
        >
          ← Back to research journal
        </Link>

        <header className="border-b border-white/10 pb-10 pt-10 sm:pt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-red-500">
            Research / {article.category}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            {article.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
            {article.tags.map((tag, i) => (
              <span key={tag} className="flex gap-3">
                {i > 0 && <span>/</span>}
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="pt-6">
          {article.blocks.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-xs leading-6 text-zinc-500">
              VANTAROOT / RESEARCH RESPONSIBLY. Test only systems you own or
              have explicit permission to assess.
            </p>

            <Link
              href="/blogs"
              className="mt-6 inline-flex border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.15em] text-zinc-200 transition hover:border-red-500 hover:text-red-400"
            >
              ← All research articles
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}