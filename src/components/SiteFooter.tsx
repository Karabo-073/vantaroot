import Link from "next/link";

const links = [["Blogs", "/blogs"], ["Projects", "/projects"], ["Team", "/team"], ["Books", "/books"], ["Contact", "/contact"]];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 sm:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-black tracking-[-0.06em]">VANTAROOT<span className="text-[#E52432]">.</span></p>
          <p className="mt-2 text-sm text-[#969BA5]">Breaking Systems. Advancing Security.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={h}><Link href={h} className="hover:text-[#E52432] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E52432]">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <p className="text-sm leading-6 text-[#969BA5]">Wi-Fi, Bluetooth, RF, automotive wireless and connected devices.</p>
      </div>
      <p className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 pt-6 text-xs text-[#969BA5]">
        © 2026 VantaRoot. Johannesburg, South Africa.
      </p>
    </footer>
  );
}
