import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SERVICES } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="bg-background-dark py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-gold text-3xl md:text-4xl text-center mb-16">
            Mes Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-lg bg-background-light/40 hover:bg-background-light/60 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-gold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
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
