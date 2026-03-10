import { Container, Section, SiteHeader } from "@/components/layouts";
import { HeroSection } from "@/components/pages/hero";

export function HomePage() {
  return (
    <main className="min-h-screen">
     
      <Section className="">
        <Container size="xl">
          <HeroSection />
        </Container>
      </Section>
    </main>
  );
}
