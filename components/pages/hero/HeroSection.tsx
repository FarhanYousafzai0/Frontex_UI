"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { PixelHeading } from "@/components/ui/pixel-heading-character";
import { HeroLetsTalkButton } from "./HeroLetsTalkButton";
import { HeroViewWorkButton } from "./HeroViewWorkButton";

const PixelBlast = dynamic(() => import("@/components/PixelBlast"), {
  ssr: false,
});

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "How I Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          color="#09090b"
          pixelSize={3}
          speed={0.3}
          patternScale={2.5}
          patternDensity={0.5}
          variant="square"
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={0.8}
          edgeFade={0.4}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8 font-satoshi">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <Link href="/" className="flex items-center">
            <Image src="/Frontex_UI.png" alt="Muhammad Farhan" width={56} height={56} />
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

          <HeroLetsTalkButton />
        </header>

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center pb-12 pt-8 text-center sm:pb-16">
          <PixelHeading
            as="h1"
            mode="wave"
            autoPlay
            cycleInterval={120}
            staggerDelay={40}
            showLabel={false}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            You know what needs to be built.
          </PixelHeading>

          <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-zinc-600 sm:text-base">
            Whether you&apos;re launching a product, automating your workflow, or
            scaling your agency&apos;s output — I handle the full stack so you can
            focus on growth.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <HeroViewWorkButton />
          </div>
        </div>
      </div>
    </section>
  );
}
