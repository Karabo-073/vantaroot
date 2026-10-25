"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Book = {
  id: string;
  title: string;
  body: string;
  image: string;
  number: string;
  status?: string;
};

const mono = "font-mono text-[11px] tracking-[0.14em] uppercase";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E52432]";

/* ---------- Marquee strip ---------- */

function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div
      aria-hidden="true"
      className="relative -mx-5 mt-14 overflow-hidden border-y border-white/10 py-5 sm:-mx-10"
    >
      <div className="vr-marquee flex w-max gap-12 whitespace-nowrap">
        {row.concat(row).map((w, i) => (
          <span
            key={i}
            className={`text-5xl font-black tracking-[-0.05em] sm:text-7xl ${
              i % 2
                ? "text-[#E52432]"
                : "text-transparent [-webkit-text-stroke:1px_rgba(244,244,245,0.5)]"
            }`}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Single book card ---------- */

function BookCard({
  book,
  index,
  reduced,
}: {
  book: Book;
  index: number;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [t, setT] = useState(0); // telemetry counter

  // Reveal once when scrolled into view
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Telemetry counter ticks up after reveal
  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setT(100);
      return;
    }
    let raf = 0;
    const start = performance.now() + index * 250;
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - start) / 1400, 0), 1);
      setT(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, reduced, index]);

  // Scroll parallax on the image (cheap: writes a CSS variable only)
  useEffect(() => {
    if (reduced) return;
    const el = cardRef.current;
    const img = imgRef.current;
    if (!el || !img) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      img.style.setProperty("--py", `${p * -50}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // 3D tilt + glare following the pointer
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 12}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 14}deg`);
    glareRef.current?.style.setProperty("--gx", `${x * 100}%`);
    glareRef.current?.style.setProperty("--gy", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      className="[perspective:1200px]"
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      <div
        ref={cardRef}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`vr-card group relative isolate aspect-[3/4] w-full overflow-hidden border border-white/15 bg-[#08090B] transition-[clip-path,opacity,transform,border-color,box-shadow] duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] hover:border-[#E52432]/70 hover:shadow-[0_40px_120px_rgba(229,36,50,0.22)] ${
          visible
            ? "opacity-100 [clip-path:inset(0_0_0_0)]"
            : "opacity-0 [clip-path:inset(100%_0_0_0)]"
        }`}
        style={{
          transitionDelay: `${index * 140}ms`,
          transform:
            "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)",
        }}
      >
        {/* Parallax + Ken Burns image */}
        <div
          ref={imgRef}
          className="absolute -inset-x-4 -inset-y-14 will-change-transform"
          style={{ transform: "translate3d(0,var(--py,0px),0)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={book.image}
            alt={`${book.title} book cover`}
            loading="eager"
            draggable={false}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              console.error("Book image failed to load:", book.image);
            }}
            className={`absolute inset-0 h-full w-full object-cover object-center saturate-[0.85] transition-[filter,transform] duration-[1400ms] ease-out group-hover:saturate-125 group-hover:scale-[1.12] ${
              reduced ? "" : "vr-kenburns"
            }`}
          />
        </div>

        {/* Colour grade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E52432]/25 via-transparent to-[#08090B]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/30 to-transparent" />

        {/* Scan lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.07) 4px)",
          }}
        />

        {/* Sweeping scanner beam */}
        {!reduced && (
          <div
            aria-hidden="true"
            className="vr-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-[#E52432]/25 to-transparent"
          />
        )}

        {/* Cursor glare */}
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.18), transparent 60%)",
          }}
        />

        {/* HUD corners */}
        {[
          "left-4 top-4 border-l border-t",
          "right-4 top-4 border-r border-t",
          "bottom-4 left-4 border-b border-l",
          "bottom-4 right-4 border-b border-r",
        ].map((c) => (
          <span
            key={c}
            aria-hidden="true"
            className={`absolute h-8 w-8 border-[#E52432] transition-all duration-500 group-hover:h-12 group-hover:w-12 ${c}`}
          />
        ))}

        {/* Top telemetry */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-8">
          <span className={`${mono} text-[#E52432]`}>
            VANTAROOT / BOOK_{book.number}
          </span>
          <span className={`${mono} text-white/70`}>
            LOAD {String(t).padStart(3, "0")}%
          </span>
        </div>

        {/* Bottom content */}
        <div
          className="absolute inset-x-0 bottom-0 p-8 [transform:translateZ(40px)] sm:p-9"
        >
          <p className={`${mono} text-white/50`}>Research series</p>

          <h3 className="mt-3 text-4xl font-black leading-[0.92] tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
            {book.title}
            <span className="text-[#E52432]">.</span>
          </h3>

          {/* Progress bar */}
          <div className="mt-5 h-px w-full bg-white/15">
            <div
              className="h-px bg-[#E52432] shadow-[0_0_12px_#E52432] transition-[width] duration-100"
              style={{ width: `${t}%` }}
            />
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 opacity-80 transition-all duration-500 group-hover:opacity-100">
            {book.body}
          </p>

          <Link
            href="/books"
            className={`mt-6 inline-flex items-center gap-3 border border-white/25 bg-[#08090B]/50 px-5 py-3 text-xs font-bold backdrop-blur-md transition-all duration-300 hover:border-[#E52432] hover:bg-[#E52432] ${focus}`}
          >
            EXPLORE BOOK
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

          {book.status && (
            <span className="ml-3 inline-block font-mono text-[10px] tracking-[0.12em] text-[#C4C7CE]">
              {book.status}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Section body ---------- */

export default function BooksShowcase({ books }: { books: Book[] }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <>
      <style>{`
        @keyframes vr-marquee { to { transform: translateX(-50%); } }
        @keyframes vr-kenburns {
          0%   { transform: scale(1.04) translate3d(0,0,0); }
          50%  { transform: scale(1.14) translate3d(-1.5%,-1%,0); }
          100% { transform: scale(1.04) translate3d(0,0,0); }
        }
        @keyframes vr-scan { 0% { transform: translateY(-120%); } 100% { transform: translateY(520%); } }
        .vr-marquee { animation: vr-marquee 40s linear infinite; }
        .vr-kenburns { animation: vr-kenburns 18s ease-in-out infinite; }
        .vr-scan { animation: vr-scan 5s linear infinite; }
        .vr-card { transform-style: preserve-3d; }
        @media (prefers-reduced-motion: reduce) {
          .vr-marquee, .vr-kenburns, .vr-scan { animation: none; }
        }
      `}</style>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {books.map((book, i) => (
          <BookCard key={book.id} book={book} index={i} reduced={reduced} />
        ))}
      </div>

      <Marquee words={["WI-FI", "CAR HACKING", "SATELLITE", "RF", "BLUETOOTH"]} />
    </>
  );
}