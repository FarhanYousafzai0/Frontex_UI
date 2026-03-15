import Image from "next/image";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui";

const navItems = [
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
  { label: "Docs", href: "/docs/getting-started" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundPaths showContent={false} fill />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/90 via-white/75 to-white/95" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8 font-satoshi">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <Link href="/" className="flex items-center">
            <Image src="/Frontex_UI.png" alt="Frontex UI" width={56} height={56} />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button size="sm" asChild>
            <Link
              href="https://github.com/FarhanYousafzai0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5"
            >
              Start on Github
            </Link>
          </Button>
        </header>

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center pb-12 pt-8 text-center sm:pb-16">
          <p className="font-alpha-lyrae text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Rebooting UI Systems
          </p>

          <h1 className="font-alpha-lyrae mt-5 text-balance text-4xl font-medium leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Rebooting the Creative Connection.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-zinc-600 sm:text-base">
            High-end components and templates for modern product teams. Build quickly, keep visual
            quality high, and scale your UI system without friction.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <Button size="lg" className="rounded-full px-7">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-7">
              Explore Components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
