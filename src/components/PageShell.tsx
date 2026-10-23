import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import "./motion.css";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F5] selection:bg-[#E52432]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}