import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

const links = ["Platform", "Manifesto", "Plans", "Docs", "About"];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Frontex_UI.png" alt="Frontex UI" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight">Frontex</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="text-xs font-medium text-zinc-600 hover:text-zinc-900">
              {link}
            </a>
          ))}
        </nav>
        <Button size="sm" className="h-8 px-4 text-xs">
          Sign in
        </Button>
      </div>
    </header>
  );
}
