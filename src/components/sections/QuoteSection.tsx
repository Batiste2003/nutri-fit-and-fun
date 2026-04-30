import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SITE } from '@/lib/constants'

export function QuoteSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6">
      <ScrollReveal>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90">
            {SITE.quote}
          </p>
        </blockquote>
      </ScrollReveal>
    </section>
  )
}
