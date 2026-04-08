"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui";
import { SendIcon, type SendIconHandle } from "@/components/ui/send";

export function HeroLetsTalkButton() {
  const iconRef = useRef<SendIconHandle>(null);

  return (
    <Button size="sm" asChild>
      <Link
        href="#contact"
        className="rounded-full px-5 flex items-center gap-1.5"
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        Let&apos;s Talk
        <SendIcon
          ref={iconRef}
          size={14}
          className="flex shrink-0 items-center justify-center"
        />
      </Link>
    </Button>
  );
}
