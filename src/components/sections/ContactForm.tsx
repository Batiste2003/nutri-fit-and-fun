import { useContactForm } from '@/hooks/useContactForm'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Instagram, Loader2, CheckCircle2 } from 'lucide-react'
import { SITE } from '@/lib/constants'

const inputClass =
  'w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all'

export function ContactForm() {
  const { formData, errors, isSubmitting, isSuccess, handleSubmit, updateField, reset } =
    useContactForm()

  if (isSuccess) {
    return (
      <ScrollReveal>
        <div className="text-center py-16">
          <CheckCircle2 className="mx-auto mb-6 text-gold" size={48} />
          <h3 className="font-display text-gold text-2xl mb-4">
            Message envoyé !
          </h3>
          <p className="text-muted mb-8">
            Merci pour votre message. Lucie vous répondra dans les plus brefs délais.
          </p>
          <button
            onClick={reset}
            className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors text-sm"
          >
            Envoyer un autre message
          </button>
        </div>
      </ScrollReveal>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-foreground/80 mb-2 tracking-wide">
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Votre nom"
          autoComplete="name"
          className={inputClass}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-foreground/80 mb-2 tracking-wide">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="votre@email.com"
          autoComplete="email"
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-foreground/80 mb-2 tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Votre message..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
        )}
      </div>

      {errors.general && (
        <p className="text-red-400 text-sm text-center">{errors.general}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-background-dark font-medium py-3 rounded-lg hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          'Envoyer'
        )}
      </button>

      <div className="pt-6 border-t border-border text-center">
        <p className="text-muted text-sm mb-3">Retrouvez-moi aussi sur</p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
        >
          <Instagram size={18} />
          <span className="text-sm">{SITE.instagramHandle}</span>
        </a>
      </div>
    </form>
  )
}
