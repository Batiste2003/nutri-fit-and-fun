import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { ABOUT_TEXT } from '@/lib/constants'

export function AboutContent() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-display text-gold text-4xl md:text-5xl mb-12">
            À Propos.
          </h1>
        </ScrollReveal>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>{ABOUT_TEXT.intro}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p>{ABOUT_TEXT.vocation}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>{ABOUT_TEXT.journey}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-display text-gold text-lg italic">
              Ma vision du sport repose sur trois piliers essentiels&nbsp;:
            </p>
            <ul className="mt-4 space-y-3 pl-4">
              {ABOUT_TEXT.pillars.map((pillar, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-gold mt-1.5 text-xs">&#9670;</span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-medium text-foreground">{ABOUT_TEXT.mission}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p>{ABOUT_TEXT.offer}</p>
          </ScrollReveal>
        </div>

        {/* Image Lucie on beach */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/image2.webp"
              alt="Lucie Cadinot - yoga sur la plage"
              loading="lazy"
              className="w-full aspect-video object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
