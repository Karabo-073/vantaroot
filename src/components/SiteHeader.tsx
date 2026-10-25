"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const nav = [
  ["Home", "/"],
  ["Blogs", "/blogs"],
  ["Services", "/services"],
  ["Team", "/team"],
  ["Books", "/books"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-white/10 bg-[#08090B]/90 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-10">
        <Link href="/" className="text-lg font-black tracking-[-0.06em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E52432]">
          VANTAROOT<span className="text-[#E52432]">.</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined}
                className={`border-b py-1 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E52432] ${active ? "border-[#E52432] text-white" : "border-transparent text-[#969BA5] hover:text-white"}`}>
                {label}
              </Link>
            );
          })}
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav"
          className="border border-white/20 px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E52432] lg:hidden">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-5 pb-4 lg:hidden">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={`block border-b border-white/5 py-4 text-lg ${pathname === href ? "text-[#E52432]" : "text-white"}`}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}