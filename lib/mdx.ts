export interface DocEntry {
  slug: string;
  title: string;
  summary: string;
  sourcePath: string;
}

export const docsIndex: DocEntry[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    summary: "Set up Frontex UI and start using components.",
    sourcePath: "content/docs/getting-started.mdx",
  },
  {
    slug: "components/button",
    title: "Button Component",
    summary: "Usage, variants, and accessibility tips for Button.",
    sourcePath: "content/docs/components/button.mdx",
  },
];

export function getDocBySlug(slug: string) {
  return docsIndex.find((entry) => entry.slug === slug);
}
