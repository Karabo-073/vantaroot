import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SlotGrid from "@/components/SlotGrid";

export const metadata: Metadata = {
  title: "Research / Field Notes | VantaRoot",
  description: "Technical investigations into wireless systems, security protocols, and connected-device attack surfaces.",
};

export default function BlogsPage() {
  return (
    <PageShell>
      <PageHero kicker="Research journal" title={<>RESEARCH /<span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">FIELD NOTES</span></>}>
        Technical investigations into wireless systems, security protocols, and connected-device attack surfaces.
      </PageHero>
      <SlotGrid prefix="BLOG" label="Article coming soon" hint="Publication slot reserved for future research." />
    </PageShell>
  );
}