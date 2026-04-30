import { ScrollReveal } from '@/components/shared/ScrollReveal'

const badges = [
  {
    icon: '-50%',
    title: 'Avance immédiate',
    subtitle: '50% crédit d\u2019impôt',
  },
  {
    icon: 'SAP',
    title: 'Service à la personne',
    subtitle: '(SAP)',
  },
  {
    icon: 'U',
    title: 'URSSAF',
    subtitle: 'Déclaré',
  },
]

export function RenseignementsSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-gold text-3xl md:text-4xl text-center mb-16">
            Renseignements&nbsp;:
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {badges.map((badge, i) => (
            <ScrollReveal key={badge.title} delay={i * 0.15}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center bg-background-dark/50">
                  <span className="font-display text-gold text-lg">
                    {badge.icon}
                  </span>
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{badge.title}</p>
                  <p className="text-muted text-xs">{badge.subtitle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
