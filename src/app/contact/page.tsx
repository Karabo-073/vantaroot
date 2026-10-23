import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | VantaRoot",
  description: "Reach VantaRoot about research collaboration, responsible disclosure, speaking and partnerships.",
};

const people = [
  ["Manuel Molapo", "Founder & Cybersecurity Research Lead", "Manuel@vantaroot.com"],
  ["Lehlogonolo Maja", "Chief Marketing Officer", "Lehlogonolo@vantaroot.com"],
  ["Atlegang Chauke", "Chief Information Officer", "Atlegang@vantaroot.com"],
  ["Tebatso Kekana", "Chief Operating Officer", "Tebatso@vantaroot.com"],
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero kicker="Contact" title={<>LET&apos;S TALK<span className="block text-transparent [-webkit-text-stroke:1.5px_#F4F4F5]">SECURITY.</span></>}>
        Research collaboration, responsible disclosure, speaking engagements, partnerships and general enquiries.
      </PageHero>

      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="vr-rise" style={{ animationDelay: "0.6s" }}>
            <ul className="space-y-3">
              {people.map(([name, role, email]) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="block border border-white/10 p-4 transition hover:border-[#E52432]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E52432]">
                    <span className="block text-xs text-[#969BA5]">{name} · {role}</span>
                    <span className="mt-1 block break-words text-sm">{email}</span>
                  </a>
                </li>
              ))}
            </ul>
            <aside className="mt-8 border-l-2 border-[#E52432] bg-white/[0.02] p-5">
              <h2 className="text-sm font-bold">Responsible disclosure</h2>
              <p className="mt-2 text-sm leading-6 text-[#969BA5]">
                Do not put passwords, exploit payloads, confidential data or sensitive vulnerability details in this form. Email us first to arrange an appropriate private channel for the technical details.
              </p>
            </aside>
          </div>
          <div className="vr-rise" style={{ animationDelay: "0.8s" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}