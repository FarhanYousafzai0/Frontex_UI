import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/mdx";

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const resolved = await params;
  const slug = (resolved.slug ?? ["getting-started"]).join("/");
  const doc = getDocBySlug(slug);

  if (!doc) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
          Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
      <p className="mt-3 text-zinc-600">{doc.summary}</p>
      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5">
        <p className="text-sm text-zinc-500">Source file:</p>
        <code className="mt-1 block text-sm">{doc.sourcePath}</code>
      </div>
    </main>
  );
}
