import Link from "next/link";
import { Container, Grid, Section } from "@/components/layouts";
import { Card, CardDescription, CardTitle } from "@/components/ui";

const templates = [
  { title: "SaaS Landing", href: "/templates?name=saas" },
  { title: "Portfolio", href: "/templates?name=portfolio" },
  { title: "Startup", href: "/templates?name=startup" },
];

export function TemplatesPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <Container size="lg">
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
          <p className="mt-3 text-zinc-600">Reusable page templates for fast delivery.</p>
          <Grid cols={3} className="mt-8">
            {templates.map((template) => (
              <Link key={template.title} href={template.href}>
                <Card className="h-full transition hover:-translate-y-0.5">
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>Open preview and customize sections.</CardDescription>
                </Card>
              </Link>
            ))}
          </Grid>
          <div className="mt-8">
            <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
              Back to home
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
