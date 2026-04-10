import Image from "next/image";

type HeroBrandProps = {
  className: string;
  iconSize: number;
  supClassName: string;
};

export function HeroBrand({ className, iconSize, supClassName }: HeroBrandProps) {
  return (
    <a href="#" className={className}>
      <Image
        src="/portfolio-avatar-icon.png"
        alt="Farhan logo"
        width={iconSize}
        height={iconSize}
        className="rounded-full object-cover ring-1 ring-white/50"
        priority
      />
      Farhan
      <sup className={supClassName}>®</sup>
    </a>
  );
}
