import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/sections/HeroSection'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <ServicesSection />

      {/* CTA */}
      <section className="bg-background py-20 md:py-28 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-foreground text-2xl md:text-3xl mb-6">
            Prête à commencer&nbsp;?
          </h2>
          <Link
            to="/contact"
            className="inline-block border-2 border-gold text-gold px-8 py-3 rounded-lg text-sm tracking-widest uppercase hover:bg-gold hover:text-background-dark transition-all duration-300"
          >
            Me contacter
          </Link>
        </ScrollReveal>
      </section>
    </>
  )
}
