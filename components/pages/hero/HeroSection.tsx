import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

const nav = [
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/docs/getting-started" },
];

export function HeroSection() {
  return (
    <section className="relative rounded-3xl border border-zinc-200 bg-card px-4 pb-8 pt-6 sm:px-5 h-full w-full hero-shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-zinc-200/70 pb-6">
        <Link href="/" className="flex items-center">
          <Image src="/Frontex_UI.png" alt="Frontex UI" width={34} height={34} />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button size="sm" className="h-8 px-4 text-[11px]">
          Sign in
        </Button>
      </div>
      <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Rebooting UI Systems
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Rebooting the
          <span className="block">Creative Connection.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base">
          High-end components and templates for modern product teams.
          Start simple, scale beautifully.
        </p>
        <div className="mt-7">
          <Button size="lg">Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
}
