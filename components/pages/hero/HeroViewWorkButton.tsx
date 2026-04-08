"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui";
import {
  FolderTreeIcon,
  type FolderTreeIconHandle,
} from "@/components/ui/folder-tree";

export function HeroViewWorkButton() {
  const iconRef = useRef<FolderTreeIconHandle>(null);

  return (
    <Button size="lg" className="rounded-full px-7" asChild>
      <Link
        href="#projects"
        className="flex items-center gap-2"
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        View My Work
        <FolderTreeIcon
          ref={iconRef}
          size={18}
          className="flex shrink-0 items-center justify-center"
        />
      </Link>
    </Button>
  );
}
