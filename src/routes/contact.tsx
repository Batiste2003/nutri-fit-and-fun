import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '@/components/sections/ContactForm'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-lg">
        <ScrollReveal>
          <h1 className="font-display text-gold text-4xl md:text-5xl text-center mb-4">
            Contact
          </h1>
          <p className="text-muted text-center mb-12">
            Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-background-light/30 border border-border rounded-xl p-6 md:p-8">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
