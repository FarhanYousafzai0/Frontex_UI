import Link from "next/link";
import { Container, Grid, Section } from "@/components/layouts";
import { Card, CardDescription, CardTitle } from "@/components/ui";

const items = [
  { title: "Buttons", description: "Primary, ghost, outline and icon actions." },
  { title: "Cards", description: "Clean containers for product and content blocks." },
  { title: "Inputs", description: "Form fields with clear focus and states." },
];

export function ComponentsPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <Container size="lg">
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
          <p className="mt-3 text-zinc-600">Production-ready primitives for Frontex UI.</p>
          <Grid cols={3} className="mt-8">
            {items.map((item) => (
              <Card key={item.title}>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
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
