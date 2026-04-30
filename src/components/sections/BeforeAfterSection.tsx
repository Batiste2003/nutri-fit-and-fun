import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { TRANSFORMATIONS } from '@/lib/constants'

export function BeforeAfterSection() {
  return (
    <section className="bg-background-dark py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-gold text-3xl md:text-4xl text-center mb-16">
            Avant / Après
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TRANSFORMATIONS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="group">
                <div className="overflow-hidden rounded-lg aspect-[3/4]">
                  <img
                    src={t.image}
                    alt={`Résultat de transformation — ${t.name}, ${t.year}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-display text-gold text-xl">
                    {t.year}
                  </p>
                  <p className="text-foreground/70 text-xs tracking-widest uppercase">
                    {t.name}.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
